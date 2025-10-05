import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorService } from '../../../shared/http-error.service';
import { Employee } from '../../../core/models/employee.model';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Department } from '../departments/department.model';

@Injectable({
  providedIn: 'root'
})
export class InternalEmployeesService {
  private apiUrl = environment.humanResourcesBaseURL +'InternalEmployees';
  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);

  //Signal state
  private employeesSignal = signal<Employee[]>([]);
  private loadingSignal = signal<boolean>(false);
  private errorSignal = signal<string | null>(null);

  //public computed signals
  employeesComputed = computed(() => this.employeesSignal);
  isLoadingComputed = computed(() => this.loadingSignal);
  errorComputed = computed(() => this.errorSignal);

  // constructor() {
  //   effect(() => {
  //     console.log('Employees changes: ', this.employeesComputed)
  //   });
  // }

    public getEmployees(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.apiUrl)
    }
  public loadEmployees() {
    this.loadingSignal.set(true);
    this.http.get<Employee[]>(this.apiUrl).pipe(
      tap({
        next: (data) => {
          this.employeesSignal.set(data);
          this.errorSignal.set(null);
        },
        error: (err) =>
          this.errorSignal.set(err.message), finalize: () => this.loadingSignal.set(false)

      })
    ).subscribe();
  }

  public addEmployees(employee: Employee) {
    this.http.post<Employee>(this.apiUrl, employee)
      .subscribe({
        next: (newEmployee) => {
          this.employeesSignal.update(employeesComputed => [...employeesComputed, newEmployee])
        },
        error: (err: any) => {
          this.errorSignal.set(err.message)
        }
      });
  }

  public updateEmployees(employee: Employee) {
    this.http.put<Employee>(this.apiUrl, employee)
      .subscribe({
        next: (updatedEmployee) => {
          this.employeesSignal.update(
            employee => employee.map(x => x.businessEntityID ===
            updatedEmployee.businessEntityID ? updatedEmployee : x));
        },
        error: (err: any) => {
          this.errorSignal.set(err.message)
        }
      });
  }

  deleteEmployees(businessEntityID: number) {
    this.loadingSignal.set(true);
    this.http.delete<Employee>(`${this.apiUrl}/${businessEntityID}`).subscribe({
      next: () => {
        this.employeesSignal.update(
          employees => employees.filter(x => x.businessEntityID !== businessEntityID))
      },
      error: (err: any) => {
        this.errorSignal.set(err.message)
      }
    });
  }
}
