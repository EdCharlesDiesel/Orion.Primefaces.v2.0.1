// import {Component, inject} from '@angular/core';
// import {NgIf, NgFor, CurrencyPipe, AsyncPipe} from '@angular/common';
// import { MatCardModule } from '@angular/material/card';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatIconModule } from '@angular/material/icon';
// import {CartItemComponent} from '../cart-item/cart-item.component';
// import {CartService} from '../../../services/cart.service';
// import {MatButton} from '@angular/material/button';
// import {Router, RouterLink} from '@angular/router';
// import {selectCartViewModel} from '../../../store/cart/cart.selectors';
// import {Store} from '@ngrx/store';
// import * as CartActions from '../../../store/cart/cart.actions';
//
//
// @Component({
//   selector: 'app-cart-list',
//   standalone: true,
//   imports: [
//     NgIf,
//     NgFor,
//     MatCardModule,
//     MatDividerModule,
//     MatIconModule,
//     CartItemComponent,
//     CurrencyPipe,
//     MatButton,
//     RouterLink,
//     AsyncPipe
//   ],
//   templateUrl: 'cart-list.component.html',
//   styleUrl: 'cart-list.component.scss'
// })
// export class CartListComponent {
//   pageTitle = 'Shopping Cart';
//
//   private cartService = inject(CartService);
//
//   cartItems = this.cartService.cartItems;
//   cartTotal  = this.cartService.subTotal;
//   cartTax  = this.cartService.tax;
//   cartSubtotal = this.cartService.totalPrice;
//
//   private store = inject(Store);
//
//   vm$ = this.store.select(selectCartViewModel);
//
//   ngOnInit(): void {
//     // Load cart from localStorage if needed
//     this.store.dispatch(CartActions.loadCart());
//   }
//
//
//   constructor(private router: Router) {}
//   clearCart(): void {
//     if (confirm('Are you sure you want to clear the entire cart?')) {
//       this.store.dispatch(CartActions.clearCart());
//     }
//   }
//
//   checkout(): void {
//     // Navigate to checkout page
//     this.router.navigate(['/checkout']);
//   }
//
//   trackByProductId(index: number, item: any): number {
//     return item.productId; // or 'id' depending on your model
//   }
// }
