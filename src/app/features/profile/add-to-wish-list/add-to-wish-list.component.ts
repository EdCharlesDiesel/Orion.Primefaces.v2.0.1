import { Component, Input, OnChanges } from '@angular/core';
import {Product} from "../../../core/models/product";
import {WishlistService} from "../../../shared/services/wishlist.service";
import {SubscriptionService} from "../../../shared/services/subscription.service";
import {SnackbarService} from "../../../shared/services/snackbar.service";



@Component({
  selector: 'app-add-to-wish-list',
  templateUrl: './add-to-wish-list.component.html',
  styleUrls: ['./add-to-wish-list.component.scss'],
  standalone: true
})
export class AddToWishListComponent implements OnChanges {

  @Input()
  productId?: number;

  @Input()
  showButton = false;

  userId;
  toggle: boolean = false;
  buttonText!: string;
  public wishlistItems: Product[] = [];

  constructor(
    private wishlistService: WishlistService,
    private subscriptionService: SubscriptionService,
    private snackBarService: SnackbarService) {
    this.userId = JSON.parse(localStorage.getItem('userId')||'{}') ;
    //this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  ngOnChanges() {
    this.subscriptionService.wishlistItem$.pipe().subscribe(
      (productData: Product[]) => {
        this.setFavourite(productData);
        this.setButtonText();
      });
  }

  setFavourite(productData: Product[]) {
    const favProduct = productData.find(f => f.productID === this.productId);

    if (favProduct) {
      this.toggle = true;
    } else {
      this.toggle = false;
    }
  }

  setButtonText() {
    if (this.toggle) {
      this.buttonText = 'Remove from Wishlist';
    } else {
      this.buttonText = 'Add to Wishlist';
    }
  }

  toggleValue() {
    this.toggle = !this.toggle;
    this.setButtonText();

    this.wishlistService.toggleWishlistItem(this.userId, this.productId).subscribe(
      () => {
        if (this.toggle) {
       //   this.snackBarService.showSnackBar('Item added to your Wishlist');
        } else {
       //   this.snackBarService.showSnackBar('Item removed from your Wishlist');
        }
      }, error => {
        console.log('Error occurred while adding to wish-list : ', error);
      });
  }
}
