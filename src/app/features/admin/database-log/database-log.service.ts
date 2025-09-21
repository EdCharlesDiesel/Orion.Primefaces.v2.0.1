import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DatabaseLog} from "../../../core/models/database-log";


@Injectable({
  providedIn: 'root'
})
export class DatabaseLogService {
  private apiUrl = 'http://localhost:9006/api/DatabaseLog';

  constructor(private http: HttpClient) {}
  //TODO: Need to fix Not recommnded hence I need to start using Guid to begin with.
  private tempId = 55;
  createDatabaseLog(data: DatabaseLog): Observable<DatabaseLog> {
    data.databaseLogID = ++this.tempId; // negative IDs as temp placeholders
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
