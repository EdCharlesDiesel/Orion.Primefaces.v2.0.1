import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { Address } from "src/app/core/models/address.model";




@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiUrl = 'http://localhost:9100/api/Address';
  private tempId = 17;
  constructor(private http: HttpClient) {}

  public createAddress(info: Address): Observable<Address> {
    this.tempId += 1;
    info.addressID = this.tempId;  // increments each call
    return this.http.post<Address>(this.apiUrl, info);
  }
  public getAddresss(): Observable<Address[]> {

    return this.http.get<Address[]>(this.apiUrl);
  }

  public getAddressById(id: number): Observable<Address> {
    return this.http.get<Address>(`${this.apiUrl}/${id}`);
  }
  public updateAddress(id: number, payload: any): Observable<Address> {
    return this.http.put<Address>(`${this.apiUrl}/${id}`, payload);
  }

  public deleteAddress(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
