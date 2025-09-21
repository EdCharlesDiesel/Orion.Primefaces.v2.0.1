import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessEntityContact } from 'src/app/core/models/business-entity-contact.model';



@Injectable({
  providedIn: 'root'
})
export class BusinessEntityContactService {
  private apiUrl = 'http://localhost:9010/api/BusinessEntityContact';

  constructor(private http: HttpClient) {}//localhost:9010/
  //TODO: Need to fix Not recommnded hence I need to start using Guid to begin with.
  private tempId = 100;
  createBusinessEntityContact(data: BusinessEntityContact): Observable<BusinessEntityContact> {
    data.businessEntityID = ++this.tempId; // negative IDs as temp placeholders
    return this.http.post<BusinessEntityContact>(this.apiUrl, data);
  }
  getBusinessEntityContact(): Observable<BusinessEntityContact[]> {
    return this.http.get<BusinessEntityContact[]>(this.apiUrl);
  }

  getBusinessEntityContactById(id: number): Observable<BusinessEntityContact> {
    return this.http.get<BusinessEntityContact>(`${this.apiUrl}/${id}`);
  }


  updateBusinessEntityContact(id: number, data: BusinessEntityContact): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  deleteBusinessEntityContact(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
