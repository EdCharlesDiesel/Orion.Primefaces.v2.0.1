import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';

import {environment} from "../../../environments/environment";
import {ProductCategory} from "../../core/models/product-category.model";
import {Product} from "../../core/models/product";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = environment.baseURL + "product";

  constructor(private http: HttpClient) { }

  categories$ = this.http.get<ProductCategory[]>(this.baseURL + 'GetCategoriesList').pipe(shareReplay(1));



  products$ = this.getAllProducts().pipe(shareReplay(1));


  getAllProducts() {
    return this.http.get<Product[]>(this.baseURL);
  }

  addProduct(product:Product) {
    return this.http.post(this.baseURL, product);
  }

  getSimilarProducts(productId: number) {
    return this.http.get<Product[]>(this.baseURL + 'GetSimilarProducts/' + productId);
  }

  updateProductDetails(product:Product) {
    return this.http.put(this.baseURL, product);
  }

  deleteProduct(id: number) {
    return this.http.delete(this.baseURL + id);
  }

  getProductsSmall() {

  }
}
