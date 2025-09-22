// import { Component, OnInit } from '@angular/core';
// import { Book } from 'src/app/components/product/product';
// import { SubscriptionService } from 'src/app/services/subscription.service';
// import { Observable, Subject } from 'rxjs';
// import { WishlistService } from 'src/app/services/wish-list.service';
// import { SnackbarService } from 'src/app/services/snackbar.service';
// import { takeUntil } from 'rxjs/operators';
//
// @Component({
//   selector: 'app-wish-list',
//   templateUrl: './wish-list.component.html',
//   styleUrls: ['./wish-list.component.scss']
// })
// export class WishlistComponent implements OnInit {
//
//   wishlistItems$: Observable<Book[]> = new Observable<Book[]>();
//   isLoading: boolean = false;
//   userId;
//   private unsubscribe$ = new Subject<void>();
//
//   constructor(
//     private subscriptionService: SubscriptionService,
//     private wishlistService: WishlistService,
//     private snackBarService: SnackbarService) {
//     this.userId = JSON.parse(localStorage.getItem('userId') || '{}');
//   }
//
//   ngOnInit(): void {
//     this.isLoading = true;
//     this.getWishlistItems();
//   }
//
//   private getWishlistItems() {
//     this.wishlistItems$ = this.subscriptionService.wishlistItem$;
//     this.isLoading = false;
//   }
//
//   public clearWishlist() {
//     this.wishlistService.clearWishlist(this.userId)
//       .pipe(takeUntil(this.unsubscribe$))
//       .subscribe(
//         result => {
//           this.subscriptionService.wishlistItemcount$.next(result);
//           this.snackBarService.showSnackBar('Wishlist cleared!!!');
//         //  this.getShoppingCartItems();
//         }, error => {
//           console.log('Error ocurred while deleting wish-list item : ', error);
//         });
//   }
// }
