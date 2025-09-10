import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DatabaseLog} from "../../../api/database-log";


@Injectable({
  providedIn: 'root'
})
export class DatabaseLogService {
  private apiUrl = 'http://localhost:9006/api/DatabaseLog';

  constructor(private http: HttpClient) {}

  getDatabaseLog(): Observable<DatabaseLog[]> {
    return this.http.get<DatabaseLog[]>(this.apiUrl);
  }

  getDatabaseLogById(id: number): Observable<DatabaseLog> {
    return this.http.get<DatabaseLog>(`${this.apiUrl}/${id}`);
  }

  updateDatabaseLog(systemInfo: DatabaseLog): Observable<DatabaseLog> {
    return this.http.put<DatabaseLog>(`${this.apiUrl}/${systemInfo}`, systemInfo);
  }

  deleteDatabaseLog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
