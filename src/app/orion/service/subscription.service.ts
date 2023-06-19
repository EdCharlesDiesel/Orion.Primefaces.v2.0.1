import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from '../api/product';
import {User} from "../api/user";


@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  userData = new BehaviorSubject<Product>(new Product());
  bookDetails$ = new BehaviorSubject<User>(new User());
  searchItemValue$ = new BehaviorSubject<string>('');
  wishlistItemcount$ = new Subject<number>();
  wishlistItem$ = new BehaviorSubject<Product[]>([]);
  cartItemcount$ = new Subject<number>();
  bookSubItemcount$ = new Subject<number>();
  bookSubscriptionItem$ = new BehaviorSubject<Product[]>([]);
  bookSubscriptionItemcount$ = new Subject<number>();
}
