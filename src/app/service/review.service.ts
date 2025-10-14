import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviewsUrl = 'api/reviews';

 public getReviewUrl(productId: number): string {
    return this.reviewsUrl + '?productId=^' + productId + '$';
  }
}
