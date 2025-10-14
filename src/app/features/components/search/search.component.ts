import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

@Component({
    selector: 'app-product-search',
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AutoCompleteModule
    ],
    template: `
    <form>
      <p-autoComplete
        [formControl]="searchControl"
        [suggestions]="filteredProducts"
        (completeMethod)="filterProducts($event)"
        (onSelect)="searchStore($event)"
        (onKeyDown)="onKeyDown($event)"
        field="title"
        placeholder="Search products or authors"
        [dropdown]="true"
        styleClass="searchbox"
        inputStyleClass="search-input">

        <ng-template let-product pTemplate="item">
          <div class="product-item">
            <span>{{ product.title }}</span>
          </div>
        </ng-template>
      </p-autoComplete>
    </form>
  `,
    styles: [`
    form {
      width: 100%;
    }

    :host ::ng-deep .searchbox {
      width: 100%;
    }

    :host ::ng-deep .search-input {
      width: 100%;
      padding: 0.75rem;
      border-radius: 4px;
      border: 1px solid var(--surface-border);
    }

    :host ::ng-deep .search-input:focus {
      outline: 0 none;
      outline-offset: 0;
      box-shadow: 0 0 0 0.2rem var(--primary-color-alpha);
      border-color: var(--primary-color);
    }

    .product-item {
      padding: 0.5rem;
      cursor: pointer;
    }

    .product-item:hover {
      background-color: var(--surface-hover);
    }
  `]
})
export class ProductSearchComponent implements OnInit {
    searchControl = new FormControl('');
    products: any[] = []; // Your full product list
    filteredProducts: any[] = [];

    ngOnInit(): void {
        // Load your products here
        // this.products = [...];
    }

    filterProducts(event: any): void {
        const query = event.query.toLowerCase();

        if (!query) {
            this.filteredProducts = [...this.products];
        } else {
            this.filteredProducts = this.products.filter(product =>
                product.title.toLowerCase().includes(query)
            );
        }
    }

    searchStore(event: any): void {
        // Handle the search/selection
        console.log('Selected:', event);

        // If you want to search on selection
        const selectedValue = event.value || event;
        // Perform your search logic here
    }

    onKeyDown(event: KeyboardEvent): void {
        if (event.key === 'Enter') {
            this.searchStore(this.searchControl.value);
        }
    }
}
