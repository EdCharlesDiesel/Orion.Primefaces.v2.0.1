// import { Component } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import {ProductService} from '../../../services/product.service';
//
//
// @Component({
//   selector: 'app-product-details',
//   templateUrl: './product-details.component.html',
//   styleUrls: ['./product-details.component.scss']
// })
// export class ProductDetailsComponent {
//
//   selectedProduct: any;
//
//   constructor(private activatedRoute: ActivatedRoute,
//     private productService: ProductService){}
//
//   ngOnInit(){
//     this.activatedRoute.params.subscribe(p => {
//       const id = p['id'];
//
//       this.productService.getProductById(id).subscribe(result => {
//         this.selectedProduct = result;
//       })
//
//     })
//   }
//
// }
