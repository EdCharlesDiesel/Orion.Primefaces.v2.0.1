import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent {
  // private cartService = inject(CartService);
  // private router = inject(Router);
  // private snackBar = inject(MessageService);
  //
  // // Signals from cart
  // cartItems = this.cartService.cartItems;
  //
  // subtotal = this.cartService.subTotal;
  // tax = this.cartService.tax;
  // total = this.cartService.totalPrice;
  //
  // // confirmOrder() {
  //   // Show Snackbar instead of alert
  //   // this.snackBar.add('✅ Order confirmed! Thank you for your purchase.');
  //   // };
  //
  //   // Clear the cart
  //   this.cartService.clearCart();
  //
  //   // Navigate back after 1 second (allow Snackbar to show)
  //   setTimeout(() => {
  //     this.router.navigate(['/products-all']);
  //   }, 1000);
  // }
}
