import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {EmployeeDepartmentHistory} from "../../../core/models/employee-department-history.model ";




@Injectable({
  providedIn: 'root'
})
export class EmployeeDepartmentHistoryService {
  private apiUrl = 'http://localhost:9010/api/EmployeeDepartmentHistory';

  constructor(private http: HttpClient) {}
  //TODO: Need to fix Not recommnded hence I need to start using Guid to begin with.
  private tempId = 55;
  createEmployeeDepartmentHistory(data: EmployeeDepartmentHistory): Observable<EmployeeDepartmentHistory> {
    data.businessEntityID = ++this.tempId; // negative IDs as temp placeholders
    return this.http.post<EmployeeDepartmentHistory>(this.apiUrl, data);
  }
  getEmployeeDepartmentHistory(): Observable<EmployeeDepartmentHistory[]> {
    return this.http.get<EmployeeDepartmentHistory[]>(this.apiUrl);
  }

  getEmployeeDepartmentHistoryById(id: number): Observable<EmployeeDepartmentHistory> {
    return this.http.get<EmployeeDepartmentHistory>(`${this.apiUrl}/${id}`);
  }


  updateEmployeeDepartmentHistory(id: number, data: EmployeeDepartmentHistory): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  deleteEmployeeDepartmentHistory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
