import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SubscriptionService } from './subscription.service';
import {environment} from "../../../environments/environment";
import {Product} from "../../core/models/product";

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  baseURL = environment.baseURL + "Wishlist";

  constructor(
    private http: HttpClient,
    private subscriptionService: SubscriptionService) {

  }

  toggleWishlistItem(userId: number, bookId: any) {
    return this.http.post<Product[]>(this.baseURL + `ToggleWishlist/${userId}/${bookId}`, {})
      .pipe(map((response: Product[]) => {
        this.setWishlist(response);
        return response;
      }));
  }

  getWishlistItems(userId: number) {
    return this.http.get(this.baseURL + userId)
      .pipe(map((response: any) => {
        this.setWishlist(response);
        return response;
      }));
  }

  setWishlist(response: Product[]) {
    this.subscriptionService.wishlistItemcount$.next(response.length);
    this.subscriptionService.wishlistItem$.next(response);
  }

  clearWishlist(userId: number) {
    return this.http.delete<number>(this.baseURL + `${userId}`, {}).pipe(
      map((response: number) => {
        this.subscriptionService.wishlistItem$.next([]);
        return response;
      })
    );
  }
}
