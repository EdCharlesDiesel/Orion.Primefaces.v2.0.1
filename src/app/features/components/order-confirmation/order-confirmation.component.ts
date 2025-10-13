import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent {
  private cartService = inject(CartService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  // Signals from cart
  cartItems = this.cartService.cartItems;

  subtotal = this.cartService.subTotal;
  tax = this.cartService.tax;
  total = this.cartService.totalPrice;

  confirmOrder() {
    // Show Snackbar instead of alert
    this.snackBar.open('✅ Order confirmed! Thank you for your purchase.', 'Close', {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snackbar-success'] // optional custom styling
    });

    // Clear the cart
    this.cartService.clearCart();

    // Navigate back after 1 second (allow Snackbar to show)
    setTimeout(() => {
      this.router.navigate(['/products-all']);
    }, 1000);
  }
}
