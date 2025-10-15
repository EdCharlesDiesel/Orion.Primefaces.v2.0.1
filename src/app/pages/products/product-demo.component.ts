import { Component, OnInit, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../../core/models/product';
import { Carousel } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { Tag } from 'primeng/tag';

@Component({
    selector: 'app-product-gallery',
    templateUrl: './product-demo.component.html',
    imports: [Carousel, GalleriaModule, Tag],
    styleUrls: ['./product-demo.component.scss']
})
export class ProductDemoComponent implements OnInit {
    products = signal<Product[]>([]);
    images = signal<{ itemImageSrc: string; thumbnailImageSrc: string }[]>([]);

    carouselResponsiveOptions = [
        { breakpoint: '1024px', numVisible: 3, numScroll: 3 },
        { breakpoint: '768px', numVisible: 2, numScroll: 2 },
        { breakpoint: '560px', numVisible: 1, numScroll: 1 }
    ];

    galleriaResponsiveOptions = [
        { breakpoint: '1024px', numVisible: 5 },
        { breakpoint: '768px', numVisible: 3 },
        { breakpoint: '560px', numVisible: 1 }
    ];

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.loadProducts();
        this.loadImages();
    }

    private loadProducts(): void {
        this.http.get<Product[]>('/api/products').subscribe({
            next: (data) => this.products.set(data ?? []),
            error: (err) => console.error('Error loading products:', err)
        });
    }

    private loadImages(): void {
        this.http.get<{ itemImageSrc: string; thumbnailImageSrc: string }[]>('/api/images').subscribe({
            next: (data) => this.images.set(data ?? []),
            error: (err) => console.error('Error loading images:', err)
        });
    }

    getSeverity(status: string): string {
        switch (status?.toUpperCase()) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return 'info';
        }
    }
}
