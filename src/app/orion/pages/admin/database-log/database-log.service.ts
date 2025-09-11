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

  createDatabaseLog(data: DatabaseLog): Observable<DatabaseLog> {
    return this.http.post<DatabaseLog>(this.apiUrl, data);
  }
  getDatabaseLog(): Observable<DatabaseLog[]> {
    return this.http.get<DatabaseLog[]>(this.apiUrl);
  }

  getDatabaseLogById(id: number): Observable<DatabaseLog> {
    return this.http.get<DatabaseLog>(`${this.apiUrl}/${id}`);
  }


  updateDatabaseLog(id: number, data: DatabaseLog): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  deleteDatabaseLog(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
