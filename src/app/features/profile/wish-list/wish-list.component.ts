import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {WishlistService} from "../../../shared/services/wishlist.service";
import {SnackbarService} from "../../../shared/services/snackbar.service";
import {SubscriptionService} from "../../../shared/services/subscription.service";
import {Product} from "../../../core/models/product";

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
  standalone: true
})
export class WishlistComponent implements OnInit {

  wishlistItems$: Observable<Product[]> = new Observable<Product[]>();
  isLoading: boolean = false;
  userId;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private subscriptionService: SubscriptionService,
    private wishlistService: WishlistService,
    private snackBarService: SnackbarService) {
    this.userId = JSON.parse(localStorage.getItem('userId') || '{}');
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getWishlistItems();
  }

  private getWishlistItems() {
    this.wishlistItems$ = this.subscriptionService.wishlistItem$;
    this.isLoading = false;
  }

  public clearWishlist() {
    // this.wishlistService.clearWishlist(this.userId)
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe(
    //     result => {
    //       this.subscriptionService.wishlistItemcount$.next(result);
    //       this.snackBarService.showSnackBar('Wishlist cleared!!!');
    //     //  this.getShoppingCartItems();
    //     }, error => {
    //       console.log('Error ocurred while deleting wish-list item : ', error);
    //     });
  }
}
