import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map } from 'rxjs/operators';
import { Product } from '../api/product';
import { Categories } from '../api/categories';
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseURL = environment.baseURL + "book";

  constructor(private http: HttpClient) { }

  categories$ = this.http.get<Categories[]>(this.baseURL + 'GetCategoriesList').pipe(shareReplay(1));



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
