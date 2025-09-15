import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Department} from "../../../api/department.model";


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = 'http://localhost:9010/api/Department';

  constructor(private http: HttpClient) {}

  createDepartment(info: Department): Observable<Department> {
    return this.http.post<Department>(this.apiUrl, info);
  }
  getDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>(this.apiUrl);
  }

  getDepartmentById(id: number): Observable<Department> {
    return this.http.get<Department>(`${this.apiUrl}/${id}`);
  }

  updateDepartment(systemInfo: Department): Observable<Department> {
    return this.http.put<Department>(`${this.apiUrl}/${systemInfo.DepartmentID}`, systemInfo);
  }

  deleteDepartment(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
