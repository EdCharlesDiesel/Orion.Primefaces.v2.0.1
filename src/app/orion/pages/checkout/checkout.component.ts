// // import { ProductSubscriptionService } from '../product-subscription/product-subscription.service';
//
// import {Component, OnInit, OnDestroy} from '@angular/core';
//
// import {FormBuilder, Validators} from '@angular/forms';
// import {Router} from '@angular/router';
//
// import {Subject} from 'rxjs';
// import {takeUntil} from 'rxjs/operators';
// import {Order} from "../../components/my-orders/order";
// import {CartService} from "../../service/cart.service";
// import {CheckoutService} from "../../service/checkout.service";
// import {SnackbarService} from "../../service/snackbar.service";
// import {SubscriptionService} from "../../service/subscription.service";
// import {ShoppingCart} from "../../components/shoppingcart/shoppingcart";
//
//
// @Component({
//   selector: 'app-checkout',
//   templateUrl: './checkout.component.html',
//   styleUrls: ['./checkout.component.scss']
// })
// export class CheckoutComponent implements OnInit, OnDestroy {
//
//   userId;
//   subCount: number= 0;
//   totalPrice: number = 0;
//   checkOutItems = new Order();
//   private unsubscribe$ = new Subject<void>();
//
//   constructor(
//     private fb: FormBuilder,
//     private router: Router,
//     private cartService: CartService,
//     private checkOutService: CheckoutService,
//     private snackBarService: SnackbarService,
//     private subscriptionService: SubscriptionService) {
//     this.userId = JSON.parse(localStorage.getItem('userId') || '{}');
//   }
//
//   checkOutForm = this.fb.group({
//     name: ['', Validators.required],
//     addressLine1: ['', Validators.required],
//     addressLine2: ['', Validators.required],
//     pincode: ['', Validators.compose([Validators.required, Validators.pattern('^[1-9][0-9]{5}$')])],
//     state: ['', [Validators.required]]
//   });
//
//   get name() {
//     return this.checkOutForm.get('name');
//   }
//
//   get addressLine1() {
//     return this.checkOutForm.get('addressLine1');
//   }
//
//   get addressLine2() {
//     return this.checkOutForm.get('addressLine2');
//   }
//
//   get pincode() {
//     return this.checkOutForm.get('pincode');
//   }
//
//   get state() {
//     return this.checkOutForm.get('state');
//   }
//
//   ngOnInit() {
//     this.getCheckOutItems();
//   }
//
//   getCheckOutItems() {
//     this.cartService.getCartItems(this.userId)
//       .pipe(takeUntil(this.unsubscribe$))
//       .subscribe(
//         (result: ShoppingCart[]) => {
//           this.checkOutItems.orderDetails = result;
//           this.getTotalPrice();
//         }, error => {
//           console.log('Error ocurred while fetching shopping cart item : ', error);
//         });
//
//   }
//
//   getTotalPrice() {
//     this.totalPrice = 0;
//     this.checkOutItems.orderDetails.forEach(item => {
//       this.totalPrice += (item.book.purchasePrice * item.quantity);
//     });
//     this.checkOutItems.cartTotal = this.totalPrice;
//   }
//
//
//   placeOrder() {
//     if (this.checkOutForm.valid) {
//       this.checkOutService.placeOrder(this.userId, this.checkOutItems)
//         .pipe(takeUntil(this.unsubscribe$))
//         .subscribe(
//           result => {
//             this.subscriptionService.cartItemcount$.next(result);
//             this.router.navigate(['/myorders']);
//             this.snackBarService.showSnackBar('Order placed successfully!!!');
//           }, error => {
//             console.log('Error ocurred while placing order : ', error);
//           });
//     }
//     this.addToSubscriberList();
//   }
//
//
//   addToSubscriberList(): number {
//
//     return this.subCount++;
//   };
//
//
//   ngOnDestroy() {
//     this.unsubscribe$.next();
//     this.unsubscribe$.complete();
//   }
// }
