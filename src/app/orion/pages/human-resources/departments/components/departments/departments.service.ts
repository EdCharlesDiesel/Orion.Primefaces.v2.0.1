import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Department} from "../../../../../api/department.model";


@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  private apiUrl = 'http://localhost:9010/api/Department';

  constructor(private http: HttpClient) {}

  public createDepartment(info: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, info);
  }
  public getDepartments(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  public getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${id}`);
  }
  public updateDepartment(id: number, payload: any): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/${id}`, payload);
  }

  public deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
