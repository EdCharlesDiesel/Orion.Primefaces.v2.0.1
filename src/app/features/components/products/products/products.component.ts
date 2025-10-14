
import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {CartService} from '../../../services/cart.service';
import {Router} from '@angular/router';
import * as CartActions from '../../../store/cart/cart.actions';
import {
  selectAllProducts,
  selectProductsError,
  selectProductsLoading,
  selectProductsViewModel
} from '../../../store/products/product.selectors';
import {Product} from '../product.model';
import * as ProductActions from '../../../store/products/product.actions';
import {CommonModule} from '@angular/common';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {MatIcon} from '@angular/material/icon';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton, MatIconButton} from '@angular/material/button';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-all',
  standalone: true,
  imports: [CommonModule, MatProgressSpinner, MatIcon, MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle, MatCardContent, MatCardImage, MatCardActions, MatButton, MatIconButton],
  templateUrl: 'products-all.component.html',
  styleUrl: 'products-all.component.scss'
})
export class ProductsComponent implements OnInit {
  private readonly store = inject(Store);
  private cartService = inject(CartService);
  private readonly router = inject(Router);
  constructor(
    private snackBar: MatSnackBar
  ) {}
  // Single view model observable
  vm$ = this.store.select(selectProductsViewModel);

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.store.dispatch(ProductActions.loadProducts());
  }

  public addToCart(product: Product): void {
    if ((product.quantityInStock ?? 0) > 0) {
      // Dispatch to cart
      this.store.dispatch(CartActions.addToCart({ product, quantity: 1 }));

      // Decrement product stock
      this.store.dispatch(ProductActions.decrementProductQuantity({
        id: product.id,
        amount: 1
      }));

      // Show success snackbar
      this.snackBar.open(`${product.title} added to cart!`, 'Close', {
        duration: 3000, // 3 seconds
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['snackbar-success'] // optional CSS class
      });

    } else {
      // Show out-of-stock snackbar
      this.snackBar.open('This product is out of stock!', 'Close', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
        panelClass: ['snackbar-error'] // optional CSS class
      });
    }
  }

  removeProductNow(id: number): void {
    if (confirm('Are you sure you want to remove this product?')) {
      this.store.dispatch(ProductActions.deleteProduct({ id }));
    }
  }

  updateQuantity(id: number, quantity: number): void {
    this.store.dispatch(ProductActions.updateProductQuantity({ id, quantity }));
  }

  isOutOfStock(product: Product): boolean {
    return (product.quantityInStock ?? 0) === 0;
  }

  isLowStock(product: Product): boolean {
    const quantity = product.quantityInStock ?? 0;
    return quantity > 0 && quantity <= 5;
  }

  trackByProductId(index: number, product: Product): number {
    return product.id;
  }
}
