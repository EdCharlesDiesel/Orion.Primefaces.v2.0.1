import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {AddressType} from "../../../api/address-type.model";
import {environment} from "../../../../../environments/environment";



@Injectable({
  providedIn: 'root'
})
export class AddressTypeTypesService {
  getAddress() {
      throw new Error("Method not implemented.");
  }
  private apiUrl = environment.personbaseURL + '/AddressType';

  constructor(private http: HttpClient) {}
  //TODO: Need to fix Not recommnded hence I need to start using Guid to begin with.
  private tempId = 55;
  createAddressType(data: AddressType): Observable<AddressType> {
    data.addressTypeId = ++this.tempId; // negative IDs as temp placeholders
    return this.http.post<AddressType>(this.apiUrl, data);
  }
  getAddressType(): Observable<AddressType[]> {
    return this.http.get<AddressType[]>(this.apiUrl);
  }

  getAddressTypeById(id: number): Observable<AddressType> {
    return this.http.get<AddressType>(`${this.apiUrl}/${id}`);
  }


  updateAddressType(id: number, data: AddressType): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${id}`, data);
  }

  deleteAddressType(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
