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

  baseURL = environment.baseURL + "book";

  constructor(private http: HttpClient) { }

  categories$ = this.http.get<ProductCategory[]>(this.baseURL + 'GetCategoriesList').pipe(shareReplay(1));



  books$ = this.getAllBooks().pipe(shareReplay(1));


  getAllBooks() {
    return this.http.get<Product[]>(this.baseURL);
  }

  addBook(book:Product) {
    return this.http.post(this.baseURL, book);
  }


  getsimilarBooks(bookId: number) {
    return this.http.get<Product[]>(this.baseURL + 'GetSimilarBooks/' + bookId);
  }




  updateBookDetails(book:Product) {
    return this.http.put(this.baseURL, book);
  }

  deleteBook(id: number) {
    return this.http.delete(this.baseURL + id);
  }

  getProductsSmall() {

  }
}
