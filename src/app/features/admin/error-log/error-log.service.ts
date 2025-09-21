// error-log.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ErrorLog} from "../../../core/models/errorLog";


@Injectable({
  providedIn: 'root'
})
export class ErrorLogService {
  private apiUrl = 'http://localhost:9009/api/ErrorLog';

  constructor(private http: HttpClient) {}

  getErrorLog(): Observable<ErrorLog[]> {
    return this.http.get<ErrorLog[]>(this.apiUrl);
  }

  getErrorLogById(id: number): Observable<ErrorLog> {
    return this.http.get<ErrorLog>(`${this.apiUrl}/${id}`);
  }

  updateErrorLog(systemInfo: ErrorLog): Observable<ErrorLog> {
    return this.http.put<ErrorLog>(`${this.apiUrl}/${systemInfo.errorLogID}`, systemInfo);
  }

  deleteErrorLog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
