import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../../core/models/employee.model';



@Injectable({
  providedIn: 'root'
})
export class InternalEmployeesService {
  private apiUrl = 'http://localhost:9010/api/Employee';

  constructor(private http: HttpClient) {}//localhost:9010/
  //TODO: Need to fix Not recommnded hence I need to start using Guid to begin with.
  private tempId = 100;
  createEmployee(data: Employee): Observable<Employee> {
    data.businessEntityID = ++this.tempId; // negative IDs as temp placeholders
    return this.http.post<Employee>(this.apiUrl, data);
  }
  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`);
  }


  updateEmployee(id: number, data: Employee): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
