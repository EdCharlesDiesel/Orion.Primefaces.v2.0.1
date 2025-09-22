import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import {Product} from "../../../core/models/product";
import {ProductService} from "../../../shared/services/product.service";

@Component({
  selector: 'app-similar-products',
  templateUrl: './similar-products.component.html',
  styleUrls: ['./similar-products.component.scss'],
  standalone: true
})
export class SimilarProductsComponent implements OnInit {

  @Input()
  productId: number =0;

  SimilarProduct$: Observable<Product[]> | undefined ;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.productId = +params['id'];
        this.getSimilarProductData();
      }
    );
  }

  getSimilarProductData() {
    this.SimilarProduct$ = this.productService.getSimilarProducts(this.productId);
  }
}
