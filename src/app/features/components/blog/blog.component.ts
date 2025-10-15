import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';
import { FormsModule } from '@angular/forms';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: Date;
    imageUrl: string;
    tags: string[];
    readTime: string;
}

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [CommonModule, RouterModule, CardModule, ButtonModule, InputTextModule, ChipModule, AvatarModule, SkeletonModule, FormsModule],
    template: `
        <div class="surface-ground min-h-screen py-5">
            <div class="container">
                <!-- Header Section -->
                <div class="text-center mb-6">
                    <h1 class="text-900 font-bold text-5xl mb-3">Our Blog</h1>
                    <p class="text-600 text-xl">Discover insights, tutorials, and updates</p>
                </div>

                <!-- Search Bar -->
                <div class="flex justify-content-center mb-5">
                    <span class="p-input-icon-left w-full md:w-6">
                        <i class="pi pi-search"></i>
                        <input pInputText type="text" placeholder="Search articles..." class="w-full" [(ngModel)]="searchQuery" />
                    </span>
                </div>

                <!-- Featured Post -->
                <div class="mb-6" *ngIf="featuredPost()">
                    <p-card styleClass="featured-card">
                        <ng-template pTemplate="header">
                            <img [src]="featuredPost()!.imageUrl" [alt]="featuredPost()!.title" class="featured-image" />
                            <div class="featured-overlay">
                                <p-chip label="Featured" styleClass="featured-chip"></p-chip>
                            </div>
                        </ng-template>
                        <div class="featured-content">
                            <h2 class="text-4xl font-bold text-900 mb-3">{{ featuredPost()!.title }}</h2>
                            <p class="text-600 text-lg mb-3">{{ featuredPost()!.excerpt }}</p>
                            <div class="flex align-items-center gap-3 mb-3">
                                <p-avatar [label]="featuredPost()!.author.charAt(0)" shape="circle" styleClass="bg-primary"> </p-avatar>
                                <div>
                                    <div class="font-semibold text-900">{{ featuredPost()!.author }}</div>
                                    <div class="text-sm text-600">{{ featuredPost()!.date | date: 'MMM dd, yyyy' }} · {{ featuredPost()!.readTime }}</div>
                                </div>
                            </div>
                            <p-button label="Read More" icon="pi pi-arrow-right" iconPos="right" [routerLink]="['/blog', featuredPost()!.id]"> </p-button>
                        </div>
                    </p-card>
                </div>

                <!-- Blog Posts Grid -->
                <div class="grid">
                    <div class="col-12 md:col-6 lg:col-4" *ngFor="let post of blogPosts()">
                        <p-card styleClass="blog-card h-full">
                            <ng-template pTemplate="header">
                                <img [src]="post.imageUrl" [alt]="post.title" class="blog-image" />
                            </ng-template>

                            <div class="flex flex-column h-full">
                                <div class="flex gap-2 mb-3 flex-wrap">
                                    <p-chip *ngFor="let tag of post.tags" [label]="tag" styleClass="tag-chip"> </p-chip>
                                </div>

                                <h3 class="text-xl font-bold text-900 mb-2 line-height-3">
                                    {{ post.title }}
                                </h3>

                                <p class="text-600 mb-3 flex-grow-1">
                                    {{ post.excerpt }}
                                </p>

                                <div class="flex align-items-center justify-content-between pt-3 border-top-1 surface-border">
                                    <div class="flex align-items-center gap-2">
                                        <p-avatar [label]="post.author.charAt(0)" shape="circle"> </p-avatar>
                                        <span class="text-sm text-600">{{ post.author }}</span>
                                    </div>
                                    <div class="text-sm text-600">
                                        {{ post.readTime }}
                                    </div>
                                </div>
                            </div>

                            <ng-template pTemplate="footer">
                                <div class="flex gap-2">
                                    <p-button label="Read Article" [text]="true" icon="pi pi-book" [routerLink]="['/blog', post.id]" styleClass="p-button-sm"> </p-button>
                                    <p-button icon="pi pi-share-alt" [text]="true" [rounded]="true" severity="secondary" styleClass="p-button-sm"> </p-button>
                                </div>
                            </ng-template>
                        </p-card>
                    </div>
                </div>

                <!-- Loading State -->
                <div class="grid" *ngIf="loading()">
                    <div class="col-12 md:col-6 lg:col-4" *ngFor="let item of [1, 2, 3]">
                        <p-card>
                            <ng-template pTemplate="header">
                                <p-skeleton width="100%" height="200px"></p-skeleton>
                            </ng-template>
                            <p-skeleton width="100%" height="2rem" styleClass="mb-3"></p-skeleton>
                            <p-skeleton width="100%" height="4rem" styleClass="mb-3"></p-skeleton>
                            <p-skeleton width="60%" height="1.5rem"></p-skeleton>
                        </p-card>
                    </div>
                </div>

                <!-- Empty State -->
                <div class="text-center py-8" *ngIf="!loading() && blogPosts().length === 0">
                    <i class="pi pi-inbox text-6xl text-400 mb-3"></i>
                    <h3 class="text-900 font-semibold text-2xl mb-2">No Posts Found</h3>
                    <p class="text-600">Check back later for new content!</p>
                </div>
            </div>
        </div>
    `,
    styles: [
        `
            .container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 0 1rem;
            }

            :host ::ng-deep .featured-card {
                background: linear-gradient(135deg, var(--primary-50) 0%, var(--surface-card) 100%);
                border: none;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }

            :host ::ng-deep .featured-card .p-card-header {
                position: relative;
                padding: 0;
                overflow: hidden;
                border-radius: 12px 12px 0 0;
            }

            .featured-image {
                width: 100%;
                height: 400px;
                object-fit: cover;
                display: block;
            }

            .featured-overlay {
                position: absolute;
                top: 1rem;
                right: 1rem;
            }

            :host ::ng-deep .featured-chip {
                background: var(--orange-500);
                color: white;
                font-weight: 600;
            }

            .featured-content {
                padding: 2rem;
            }

            :host ::ng-deep .blog-card {
                transition:
                    transform 0.3s,
                    box-shadow 0.3s;
                height: 100%;
                display: flex;
                flex-direction: column;
            }

            :host ::ng-deep .blog-card:hover {
                transform: translateY(-8px);
                box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
            }

            :host ::ng-deep .blog-card .p-card-header {
                padding: 0;
                overflow: hidden;
            }

            .blog-image {
                width: 100%;
                height: 200px;
                object-fit: cover;
                display: block;
                transition: transform 0.3s;
            }

            :host ::ng-deep .blog-card:hover .blog-image {
                transform: scale(1.05);
            }

            :host ::ng-deep .blog-card .p-card-body {
                flex: 1;
                display: flex;
                flex-direction: column;
            }

            :host ::ng-deep .blog-card .p-card-content {
                flex: 1;
                display: flex;
                flex-direction: column;
            }

            :host ::ng-deep .tag-chip {
                background: var(--primary-100);
                color: var(--primary-700);
                font-size: 0.75rem;
                padding: 0.25rem 0.5rem;
            }

            :host ::ng-deep .p-input-icon-left > input {
                padding-left: 2.5rem;
            }

            :host ::ng-deep .p-input-icon-left > .pi {
                left: 0.75rem;
            }

            @media (max-width: 768px) {
                .featured-image {
                    height: 250px;
                }

                .featured-content {
                    padding: 1.5rem;
                }

                .featured-content h2 {
                    font-size: 2rem;
                }
            }
        `
    ]
})
export class BlogComponent implements OnInit {
    blogPosts = signal<BlogPost[]>([]);
    featuredPost = signal<BlogPost | null>(null);
    loading = signal<boolean>(true);
    searchQuery = '';

    ngOnInit(): void {
        this.loadBlogPosts();
    }

    loadBlogPosts(): void {
        // Simulate API call
        setTimeout(() => {
            const posts: BlogPost[] = [
                {
                    id: 1,
                    title: 'Getting Started with PrimeNG',
                    excerpt: 'Learn how to integrate PrimeNG into your Angular applications and create beautiful UIs.',
                    content: '',
                    author: 'John Doe',
                    date: new Date('2024-01-15'),
                    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
                    tags: ['Angular', 'PrimeNG', 'Tutorial'],
                    readTime: '5 min read'
                },
                {
                    id: 2,
                    title: 'Advanced TypeScript Patterns',
                    excerpt: 'Explore advanced TypeScript patterns to write more maintainable and type-safe code.',
                    content: '',
                    author: 'Jane Smith',
                    date: new Date('2024-01-20'),
                    imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800',
                    tags: ['TypeScript', 'Design Patterns'],
                    readTime: '8 min read'
                },
                {
                    id: 3,
                    title: 'State Management in Angular',
                    excerpt: 'A comprehensive guide to managing state in Angular applications using modern techniques.',
                    content: '',
                    author: 'Mike Johnson',
                    date: new Date('2024-01-25'),
                    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800',
                    tags: ['Angular', 'State Management'],
                    readTime: '10 min read'
                },
                {
                    id: 4,
                    title: 'Building Responsive Layouts',
                    excerpt: 'Master responsive design principles and create layouts that work on any device.',
                    content: '',
                    author: 'Sarah Williams',
                    date: new Date('2024-02-01'),
                    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800',
                    tags: ['CSS', 'Responsive Design'],
                    readTime: '6 min read'
                },
                {
                    id: 5,
                    title: 'API Integration Best Practices',
                    excerpt: 'Learn the best practices for integrating REST APIs in your Angular applications.',
                    content: '',
                    author: 'David Brown',
                    date: new Date('2024-02-05'),
                    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
                    tags: ['API', 'Angular', 'Best Practices'],
                    readTime: '7 min read'
                },
                {
                    id: 6,
                    title: 'Performance Optimization Tips',
                    excerpt: 'Discover techniques to optimize your Angular applications for better performance.',
                    content: '',
                    author: 'Emily Davis',
                    date: new Date('2024-02-10'),
                    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
                    tags: ['Performance', 'Angular'],
                    readTime: '9 min read'
                }
            ];

            this.featuredPost.set(posts[0]);
            this.blogPosts.set(posts.slice(1));
            this.loading.set(false);
        }, 1000);
    }
}
