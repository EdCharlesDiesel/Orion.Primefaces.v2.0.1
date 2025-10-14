// import { Component, inject } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { MatCardModule } from '@angular/material/card';
// import { MatListModule } from '@angular/material/list';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
// import { MatIconModule } from '@angular/material/icon';
// import {ProductService} from '../../../services/product.service';
// // import {ProductDetailComponent} from '../product-detail/product-detail.component';
//
//
// @Component({
//   selector: 'app-product-list',
//   standalone: true,
//   imports: [
//     CommonModule,
//     MatCardModule,
//     MatListModule,
//     MatGridListModule,
//     MatSnackBarModule,
//     MatIconModule,
//     // ProductDetailComponent
//   ],
//   templateUrl: './product-list.component.html',
//   styleUrl:'./product-list.component.scss'
// })
// export class ProductListComponent {
//   pageTitle = 'Products';
//
//   private productService = inject(ProductService);
//
//   products = this.productService.products;
//   // errorMessage = this.productService.productError;
//   selectedProductId = this.productService.selectedProductId;
//
//   public onSelected(productId: number): void {
//     this.productService.productSelected(productId);
//   }
// }
