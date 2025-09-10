// system-information.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SystemInformation } from '../../../api/system-information.model';

@Injectable({
  providedIn: 'root'
})
<<<<<<<< HEAD:src/app/orion/pages/admin/system-information/system-information.service.ts
export class SystemInformationService {
  private apiUrl = 'http://localhost:8080/api/AwBuildVersion';
========
export class ErrorLogService {
  private apiUrl = 'http://localhost:9005/api/AwBuildVersion';
>>>>>>>> 446d715 (DatabaseLog):src/app/orion/pages/admin/error-log/error-log.service.ts

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
