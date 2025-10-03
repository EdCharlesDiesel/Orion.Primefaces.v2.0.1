import { catchError, Observable, of, shareReplay, tap } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Department } from '../../core/models/department.model';

@Injectable({
    providedIn: 'root'
})
export class DepartmentsService {
    private apiUrl = 'http://localhost:9100/api/Department';
    private tempId = 17;
    private http = inject(HttpClient);
   // private errorService = inject(HttpErrorService);


    public departmentsResult$: Observable<Result<Department[]>> = this.getDepartments();

    /**
     * Create a new department
     */
    public createDepartment(info: Department): Observable<Result<Department>> {
        return this.http.post<Department>(this.apiUrl, info).pipe(
            map((data) => ({ data }) as Result<Department>),
            tap((result) => console.log('Created department:', JSON.stringify(result))),
            catchError((err: any) =>
                of({
                    data: null,
                //    error: this.errorService.formatError(err)
                } as unknown as Result<Department>)
            )
        );
    }

    /**
     * Get all departments
     */
    public getDepartments(): Observable<Result<Department[]>> {
        return this.http.get<Department[]>(this.apiUrl).pipe(
            map((data) => ({ data } as Result<Department[]>)),
            tap((result) => console.log('Fetched departments:', JSON.stringify(result))),
            catchError((err: any) =>
                of({
                    data: [],
               //     error: this.errorService.formatError(err)
                } as Result<Department[]>)
            )
        );
    }

    /**
     * Get a single department by ID
     */
    public getDepartmentById(id: number): Observable<Result<Department>> {
        return this.http.get<Department>(`${this.apiUrl}/${id}`).pipe(
            map((data) => ({ data } as Result<Department>)),
            tap((result) => console.log(`Fetched department ${id}:`, JSON.stringify(result))),
            catchError((err: any) =>
                of({
                    data: null,
            //        error: this.errorService.formatError(err)
                } as Result<Department>)
            )
        );
    }

    /**
     * Update an existing department
     */
    public updateDepartment(id: number, department: Department): Observable<Result<Department>> {
        return this.http.put<Department>(`${this.apiUrl}/${id}`, department).pipe(
            map((data) => ({ data } as Result<Department>)),
            tap((result) => console.log(`Updated department ${id}:`, JSON.stringify(result))),
            catchError((err: any) =>
                of({
                    data: null,
             //       error: this.errorService.formatError(err)
                } as Result<Department>)
            )
        );
    }

    /**
     * Delete a department
     */
    public deleteDepartment(id: number): Observable<Result<void>> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
            map(() => ({ data: undefined } as Result<void>)),
            tap((result) => console.log(`Deleted department ${id}:`, JSON.stringify(result))),
            catchError((err: any) =>
                of({
                    data: undefined,
             //       error: this.errorService.formatError(err)
                } as Result<void>)
            )
        );
    }

    /**
     * Refresh the cached departments list
     * Call this after create, update, or delete operations
     */
    public refreshDepartments(): void {
        this.departmentsResult$ = this.getDepartments();
    }
}


export interface Result<T> {
    data: T | null;
    error?: string;
}

export interface HttpErrorService {
    formatError(err: any): string;
}
