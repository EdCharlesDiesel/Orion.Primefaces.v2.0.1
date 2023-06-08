import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import {Product} from "../../api/product";
import {ProductService} from "../../service/product.service";
import {SubscriptionService} from "../../service/subscription.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public books: Product[] = [];
  public filteredProducts: Product[] = []
  category: string='';
  priceRange = Number.MAX_SAFE_INTEGER;
  isLoading: boolean | undefined;
  searchItem: string ='';

  constructor(
    private route: ActivatedRoute,
    private bookService: ProductService,
    private subscriptionService: SubscriptionService) {
  }

  ngOnInit(): any {
    this.isLoading = true;
    this.getAllProductData();
  }

  public getAllProductData(): any {
    this.bookService.books$.pipe(switchMap(
      (data: Product[]) => {
        this.filteredProducts = data;
        return this.route.queryParams;
      }
    )).subscribe((params: any) => {
      this.category = params.category;
      this.searchItem = params.item;
      this.subscriptionService.searchItemValue$.next(this.searchItem);
      this.filterProductData();
    });
  }

  public filterPrice(value: number): any {
    this.priceRange = value;
    this.filterProductData();
  }

  public filterProductData(): any {
    const filteredData = this.filteredProducts.filter(b => b.retailPrice ?? 0 <= this.priceRange).slice();

    // if (this.category) {
    //   this.books = filteredData.filter(b => b.category.toLowerCase() === this.category.toLowerCase());
    // } else if (this.searchItem) {
    //   this.books = filteredData.filter(b => b.name.toLowerCase().indexOf(this.searchItem) !== -1
    //     || b.author.toLowerCase().indexOf(this.searchItem) !== -1);
    // } else {
    //   this.books = filteredData;
    // }

    this.books = filteredData;
    this.isLoading = false;
  }

  ngOnDestroy(): any {
    this.subscriptionService.searchItemValue$.next('');
  }
}
