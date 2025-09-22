// import { Component, Input, OnChanges } from '@angular/core';
// import {Product} from "../../api/product";
// import {WishlistService} from "../../service/wish-list.service";
// import {SubscriptionService} from "../../service/subscription.service";
// import {SnackbarService} from "../../service/snackbar.service";
//
//
// @Component({
//   selector: 'app-addtowishlist',
//   templateUrl: './addtowishlist.component.html',
//   styleUrls: ['./add-to-wish-list.component.scss']
// })
// export class AddtowishlistComponent implements OnChanges {
//
//   @Input()
//   bookId?: string;
//
//   @Input()
//   showButton = false;
//
//   userId;
//   toggle: boolean = false;
//   buttonText!: string;
//   public wishlistItems: Product[] = [];
//
//   constructor(
//     private wishlistService: WishlistService,
//     private subscriptionService: SubscriptionService,
//     private snackBarService: SnackbarService) {
//     this.userId = JSON.parse(localStorage.getItem('userId')||'{}') ;
//     //this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
//   }
//
//   ngOnChanges() {
//     this.subscriptionService.wishlistItem$.pipe().subscribe(
//       (bookData: Product[]) => {
//         this.setFavourite(bookData);
//         this.setButtonText();
//       });
//   }
//
//   setFavourite(bookData: Product[]) {
//     const favProduct = bookData.find(f => f.id === this.bookId);
//
//     if (favProduct) {
//       this.toggle = true;
//     } else {
//       this.toggle = false;
//     }
//   }
//
//   setButtonText() {
//     if (this.toggle) {
//       this.buttonText = 'Remove from Wishlist';
//     } else {
//       this.buttonText = 'Add to Wishlist';
//     }
//   }
//
//   toggleValue() {
//     this.toggle = !this.toggle;
//     this.setButtonText();
//
//     this.wishlistService.toggleWishlistItem(this.userId, this.bookId).subscribe(
//       () => {
//         if (this.toggle) {
//        //   this.snackBarService.showSnackBar('Item added to your Wishlist');
//         } else {
//        //   this.snackBarService.showSnackBar('Item removed from your Wishlist');
//         }
//       }, error => {
//         console.log('Error ocurred while adding to wish-list : ', error);
//       });
//   }
// }
