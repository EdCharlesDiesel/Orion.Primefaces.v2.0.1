import { Component, OnInit, Input } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { EMPTY, Observable } from 'rxjs';
import {Categories} from "../../../api/categories";
import {ProductService} from "../../../service/product.service";



@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {

  @Input()
  category: string ='';

  categories$: Observable<Categories[]>= new Observable<Categories[]>();

  constructor(private bookService: ProductService   ) { }

  ngOnInit(): void {
    this.fetchCategories();
  }

  fetchCategories(): any {
    this.categories$ = this.bookService.categories$
      .pipe(
        catchError(error => {
          console.log('Error ocurred while fetching category List : ', error);
          return EMPTY;
        }));
  }
}
