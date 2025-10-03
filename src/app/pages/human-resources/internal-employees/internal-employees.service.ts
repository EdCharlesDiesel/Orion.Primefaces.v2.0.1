import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorService } from '../../../shared/http-error.service';
import { IEmployee } from '../../../core/models/employee.model';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InternalEmployeesService {
    private EmployeesUrl = 'http://localhost:9100/api/ExternalEmployees';
  private http = inject(HttpClient);
  private errorService = inject(HttpErrorService);

  //Signal state
  private employeesSignal = signal<IEmployee[]>([]);
  private loadingSignal = signal<boolean>(false);
  private errorSignal = signal<string | null>(null);

  //public computed signals
  employeesComputed = computed(() => this.employeesSignal);
  isLoadingComputed = computed(() => this.loadingSignal);
  errorComputed = computed(() => this.errorSignal);

  constructor() {
    effect(() => {
      console.log('Employees changes: ', this.employeesComputed)
    });
  }

  public loadEmployees() {
    this.loadingSignal.set(true);
    this.http.get<IEmployee[]>(this.EmployeesUrl).pipe(
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

  public addEmployees(employee: IEmployee) {
    this.http.post<IEmployee>(this.EmployeesUrl, employee)
      .subscribe({
        next: (newEmployee) => {
          this.employeesSignal.update(employeesComputed => [...employeesComputed, newEmployee])
        },
        error: (err: any) => {
          this.errorSignal.set(err.message)
        }
      });
  }

  public updateEmployees(employee: IEmployee) {
    this.http.put<IEmployee>(this.EmployeesUrl, employee)
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
    this.http.delete<IEmployee>(`${this.EmployeesUrl}/${businessEntityID}`).subscribe({
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
