import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SalesOrderDetailsService {
  baseURL = environment.baseURL + "Order";

  constructor(private http: HttpClient) {
  }

  myOrderDetails(userId: number) {
    return this.http.get(this.baseURL + userId);
  }
}
