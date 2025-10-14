// import { Component } from '@angular/core';
// import {ProductService} from '../../../services/product.service';
// import {Product} from '../../../models/product.model';
// import {FormsModule} from '@angular/forms';
//
// @Component({
//   selector: 'app-product-new',
//   templateUrl: './product-new.component.html',
//   imports: [
//     FormsModule
//   ],
//   styleUrls: ['./product-new.component.scss']
// })
// export class ProductNewComponent {
//
//   product: Product = {
//     id: 0,
//     title: '',
//     price: 0,
//     description: '',
//     image: '',
//     category: '',
//     rating: {
//       rate: 0,
//       count: 0,
//     },
//
//   };
//
//   categories = [
//     "electronics",
//     "jewelery",
//     "men's clothing",
//     "women's clothing"
//   ];
//
//   constructor(private productService: ProductService) {}
//
//   ngOnInit(): void {}
//
//   addProduct(): void {
//     console.log(this.product);
//     this.productService.addProduct(this.product).subscribe(data => {
//       console.log('Product added [product]: ', this.product);
//     });
//   }
//
// }
