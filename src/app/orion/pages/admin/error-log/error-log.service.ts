// system-information.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SystemInformation } from '../../../api/system-information.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorLogService {
  private apiUrl = 'http://localhost:9005/api/AwBuildVersion';

  constructor(private http: HttpClient) {}

  getSystemInformation(): Observable<SystemInformation[]> {
    return this.http.get<SystemInformation[]>(this.apiUrl);
  }

  getSystemInformationById(id: number): Observable<SystemInformation> {
    return this.http.get<SystemInformation>(`${this.apiUrl}/${id}`);
  }

  updateSystemInformation(systemInfo: SystemInformation): Observable<SystemInformation> {
    return this.http.put<SystemInformation>(`${this.apiUrl}/${systemInfo.systemInformationID}`, systemInfo);
  }

  deleteSystemInformation(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
