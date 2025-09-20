import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Address} from "../../core/models/address.model";



@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = 'http://localhost:9200/api/Address';

  constructor(private http: HttpClient) {}
  //TODO: Need to fix Not recommnded hence I need to start using Guid to begin with.
  private tempId = 55;
  createAddress(data: Address): Observable<Address> {
    data.addressID = ++this.tempId; // negative IDs as temp placeholders
    return this.http.post<Address>(this.apiUrl, data);
  }
  getAddress(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl);
  }

  getAddressById(id: number): Observable<Address> {
    return this.http.get<Address>(`${this.apiUrl}/${id}`);
  }


  updateAddress(id: number, data: Address): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  deleteAddress(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
