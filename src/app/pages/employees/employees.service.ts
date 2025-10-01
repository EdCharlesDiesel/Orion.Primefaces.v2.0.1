import { catchError, Observable, of, shareReplay, tap } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorService } from '../../shared/http-error.service';
import { Result } from 'postcss';
import { map } from 'rxjs/operators';
import { Employee } from '../../core/models/employee.model';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {
    private apiUrl = 'http://localhost:9100/api/Employee';
    private tempId = 17;
    private http = inject(HttpClient);
    private errorService = inject(HttpErrorService);


    public employeesResult$ = this.http.get<Employee[]>(this.apiUrl).pipe(
        map((p) => ({ data: p }) as unknown as Result<Employee[]>),
        tap((p) => console.log(JSON.stringify(p))),
        shareReplay(1),
        catchError((err: any) =>
            of({
                data: [],
                error: this.errorService.formatError(err)
            } as unknown as Result<Employee[]>)
        )
    );

    public createEmployee(info: Employee) {
        // this.tempId += 1;
        // info.EmployeeID = this.tempId; // increments each call
        return this.http.post<Employee>(this.apiUrl, info).pipe(
                map((p) => ({ data: p }) as unknown as Result<Employee>),
                tap((p) => console.log(JSON.stringify(p))),
                shareReplay(1),
                catchError((err: any) =>
                    of({
                        data: [],
                        error: this.errorService.formatError(err)
                    } as unknown as Result<Employee>)
                ));
    }

    public getEmployees() {
        return this.http.get<Employee[]>(this.apiUrl).pipe(
            map((p) => ({ data: p }) as unknown as Result<Employee[]>),
            tap((p) => console.log(JSON.stringify(p))),
            shareReplay(1),
            catchError((err: any) =>
                of({
                    data: [],
                    error: this.errorService.formatError(err)
                } as unknown as Result<Employee[]>)
            )
        );
    }

    public getEmployeeById(id: number) {
        return this.http.get<Employee>(`${this.apiUrl}/${id}`).pipe(
            map((p) => ({ data: p }) as unknown as Result<Employee>),
            tap((p) => console.log(JSON.stringify(p))),
            shareReplay(1),
            catchError((err: any) =>
                of({
                    data: [],
                    error: this.errorService.formatError(err)
                } as unknown as Result<Employee>)
            )
        );
    }
    public updateEmployee(id: number, payload: any){
        return this.http.put<Employee>(`${this.apiUrl}/${id}`, payload).pipe(
            map((p) => ({ data: p }) as unknown as Result<Employee>),
            tap((p) => console.log(JSON.stringify(p))),
            shareReplay(1),
            catchError((err: any) =>
                of({
                    data: [],
                    error: this.errorService.formatError(err)
                } as unknown as Result<Employee>)
            )
        );
    }

    public deleteEmployee(id: number) {
        return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
            map((p) => ({ data: p }) as unknown as Result<Employee>),
            tap((p) => console.log(JSON.stringify(p))),
            shareReplay(1),
            catchError((err: any) =>
                of({
                    data: [],
                    error: this.errorService.formatError(err)
                } as unknown as Result<Employee>)
            )
        );
    }


}
