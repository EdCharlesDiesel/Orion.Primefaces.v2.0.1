import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from "../../../environments/environment";
import Order = jasmine.Order;


@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseURL = environment.baseURL + "CheckOut";


  constructor(private http: HttpClient) {

  }

  placeOrder(userId: number, checkedOutItems: Order) {
    return this.http.post<number>(this.baseURL + `${userId}`, checkedOutItems);
  }
}
