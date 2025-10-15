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
    templateUrl: './blog.component.html',
    styleUrl: './blog-routing.component.scss'
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
