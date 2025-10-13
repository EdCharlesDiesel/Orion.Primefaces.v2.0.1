import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {Product} from '../products/product.model';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  // Signals
  products = signal<Product[]>([]);
  categories = signal<string[]>([]);
  selectedCategory = signal<string>('all');
  loading = signal<boolean>(true);

  // Computed signals
  filteredProducts = computed(() => {
    const category = this.selectedCategory();
    const allProducts = this.products();

    if (category === 'all') {
      return allProducts;
    }

    return allProducts.filter(p => p.category === category);
  });

  stats = computed(() => {
    const allProducts = this.products();

    return {
      totalProducts: allProducts.length,
      avgPrice: allProducts.length > 0
        ? (allProducts.reduce((sum, p) => sum + p.price, 0) / allProducts.length).toFixed(2)
        : '0.00',
      categories: this.categories().length,
      highestRated: allProducts.length > 0
        ? Math.max(...allProducts.map(p => p.rating?.rate || 0)).toFixed(1)
        : '0.0'
    };
  });

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.loading.set(true);

    // Fetch products
    this.http.get<Product[]>('https://fakestoreapi.com/products').subscribe({
      next: (data) => {
        this.products.set(data);
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.loading.set(false);
      }
    });

    // Fetch categories
    this.http.get<string[]>('https://fakestoreapi.com/products/categories').subscribe({
      next: (data) => {
        this.categories.set(data);
        this.loading.set(false);
      },
      error: (error) => {
        console.error('Error fetching categories:', error);
        this.loading.set(false);
      }
    });
  }

  onCategoryChange(event: any): void {
    // Handle chip selection if needed
  }
}
