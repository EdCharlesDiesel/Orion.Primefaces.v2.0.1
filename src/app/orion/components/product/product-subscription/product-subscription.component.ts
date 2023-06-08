import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {SubscriptionService} from "../../../service/subscription.service";
import {ProductSubscriptionService} from "../../../service/product-subscription.service";
import {SnackbarService} from "../../../service/snackbar.service";
import {Product} from "../../../api/product";




@Component({
  selector: 'app-product-subscription',
  templateUrl: './product-subscription.component.html',
  styleUrls: ['./product-subscription.component.scss']
})
export class ProductSubscriptionComponent implements OnInit {
  bookSubscriptionItems$: Observable<Product[]>= new Observable<Product[]>();
  isLoading: boolean = false;
  userId: any;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private subscriptionService: SubscriptionService,
    private bookSubscriptionService: ProductSubscriptionService,
    private snackBarService: SnackbarService) {
    this.userId = localStorage.getItem('userId');
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.getProductSubscriptionItems();
  }

  getProductSubscriptionItems() {
    this.bookSubscriptionItems$ = this.subscriptionService.bookSubscriptionItem$;
    this.isLoading = false;
  }

  clearProductSubscription() {
    // this.bookSubscriptionService.clearProductSubscription(this.userId)
    //   .pipe(takeUntil(this.unsubscribe$))
    //   .subscribe(
    //     result => {
    //       this.subscriptionService.bookSubscriptionItemcount$.next(result);
    //       this.snackBarService.showSnackBar('Productsubscription cleared!!!');
    //       //this.getShoppingCartItems();
    //     }, error => {
    //       console.log('Error ocurred while deleting bookSubscription item : ', error);
    //     });
  }
}
