import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../../core/models/product';
import { Observable, startWith } from 'rxjs';
import { ProductService } from '../../../service/product.service';
import { Router } from '@angular/router';
import { SubscriptionService } from '../../../service/subscription.service';
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    imports: [ReactiveFormsModule],
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    public products: Product[] = [];
    searchControl = new FormControl();
    filteredProducts: Observable<Product[]> = new Observable<Product[]>();

    constructor(
        private productService: ProductService,
        private router: Router,
        private subscriptionService: SubscriptionService
    ) {}

    ngOnInit(): void {
        this.loadProductData();
        this.setSearchControlValue();
        this.filterProductData();
    }

    public searchStore(event: any) {
        const searchItem = this.searchControl.value;
        if (searchItem !== '') {
            this.router.navigate(['/search'], {
                queryParams: {
                    item: searchItem.toLowerCase()
                }
            });
        }
    }

    private loadProductData() {
        this.productService.products.subscribe((data: Product[]) => {
            this.products = data;
        });
    }

    private setSearchControlValue() {
        this.subscriptionService.searchItemValue$.subscribe((data) => {
            if (data) {
                this.searchControl.setValue(data);
            } else {
                this.searchControl.setValue('');
            }
        });
    }

    private filterProductData() {
        this.filteredProducts = this.searchControl.valueChanges.pipe(
            startWith(''),
            map((value) => (value.length >= 1 ? this._filter(value) : []))
        );
    }

    private _filter(value: string) {
        const filterValue = value.toLowerCase();
        return this.products?.filter((option) => option?.title?.toLowerCase().includes(filterValue));
        //FIXME fix authors from the back end and come back.
        //|| option.author.toLowerCase().includes(filterValue));
    }
}
