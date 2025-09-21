import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessEntity } from 'src/app/core/models/business-entity.model';





@Injectable({
  providedIn: 'root'
})
export class BusinessEntityService {
  private apiUrl = 'http://localhost:9010/api/BusinessEntity';

  constructor(private http: HttpClient) {}
  //TODO: Need to fix Not recommnded hence I need to start using Guid to begin with.
  private tempId = 55;
  createBusinessEntity(data: BusinessEntity): Observable<BusinessEntity> {
    data.businessEntityID = ++this.tempId; // negative IDs as temp placeholders
    return this.http.post<BusinessEntity>(this.apiUrl, data);
  }
  getBusinessEntity(): Observable<BusinessEntity[]> {
    return this.http.get<BusinessEntity[]>(this.apiUrl);
  }

  getBusinessEntityById(id: number): Observable<BusinessEntity> {
    return this.http.get<BusinessEntity>(`${this.apiUrl}/${id}`);
  }


  updateBusinessEntity(id: number, data: BusinessEntity): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  deleteBusinessEntity(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
