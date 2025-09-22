import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Product} from "../../../core/models/product";
import {ProductService} from "../../../shared/services/product.service";
import {CurrencyPipe} from "@angular/common";
import {PaginatorModule} from "primeng/paginator";

@Component({
  selector: 'app-price-filter',
  templateUrl: './price-filter.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
    PaginatorModule
  ],
  styleUrls: ['./price-filter.component.scss']
})
export class PriceFilterComponent implements OnInit {

  @Output()
  priceValue = new EventEmitter<number>(true);

  max: number | undefined;
  min: number | undefined;
  value: number| undefined;
  step = 100;
  thumbLabel = true;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.setPriceFilterProperties();
  }

  setPriceFilterProperties() {
    this.productService.products$.pipe().subscribe(
      (data: Product[]) => {
        this.setMinValue(data);
        this.setMaxValue(data);
      }
    );
  }

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }

  onChange(event: any) {
    this.priceValue.emit(event.value);
  }

  public setMinValue(product: Product[]) {
    this.min = product.reduce((prev: any, curr:any) => {
      return prev?.retailPrice < curr?.retailPrice ? prev : curr;
    }).listPrice;
  }

  public setMaxValue(product: Product[]) {
    this.value = this.max = product.reduce((prev: any, curr: any) => {
      return prev.retailPrice > curr.retailPrice ? prev : curr;
    }).listPrice;
  }
}
