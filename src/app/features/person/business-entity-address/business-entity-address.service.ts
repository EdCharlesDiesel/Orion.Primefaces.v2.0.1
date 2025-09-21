import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BusinessEntityAddress } from 'src/app/core/models/business-entity-address.model';



@Injectable({
  providedIn: 'root'
})
export class BusinessEntityAddressService {
  private apiUrl = 'http://localhost:9010/api/BusinessEntityAddress';

  constructor(private http: HttpClient) {}//localhost:9010/
  //TODO: Need to fix Not recommnded hence I need to start using Guid to begin with.
  private tempId = 100;
  createBusinessEntityAddress(data: BusinessEntityAddress): Observable<BusinessEntityAddress> {
    data.businessEntityID = ++this.tempId; // negative IDs as temp placeholders
    return this.http.post<BusinessEntityAddress>(this.apiUrl, data);
  }
  getBusinessEntityAddress(): Observable<BusinessEntityAddress[]> {
    return this.http.get<BusinessEntityAddress[]>(this.apiUrl);
  }

  getBusinessEntityAddressById(id: number): Observable<BusinessEntityAddress> {
    return this.http.get<BusinessEntityAddress>(`${this.apiUrl}/${id}`);
  }


  updateBusinessEntityAddress(id: number, data: BusinessEntityAddress): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  deleteBusinessEntityAddress(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
