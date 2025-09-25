import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
    selector: 'app-access-denied',
    templateUrl: './access-denied.html',
    styles: [
        `
            .access-denied-container {
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 2rem;
                background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
            }

            .access-denied-card {
                max-width: 500px;
                width: 100%;
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
                border-radius: 16px;
                border: none;
            }

            ::ng-deep .p-card-header {
                background: linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%);
                color: white;
                padding: 2rem;
                border-radius: 16px 16px 0 0;
            }

            .card-header {
                text-align: center;
            }

            .warning-icon {
                font-size: 4rem;
                margin-bottom: 1rem;
                display: block;
            }

            .card-header h2 {
                margin: 0;
                font-size: 2rem;
                font-weight: 600;
            }

            .content {
                padding: 2rem;
                text-align: center;
            }

            .message {
                font-size: 1.1rem;
                margin-bottom: 1rem;
                color: #374151;
            }

            .sub-message {
                color: #6b7280;
                margin-bottom: 2rem;
                line-height: 1.5;
            }

            .user-info {
                background: #f9fafb;
                padding: 1rem;
                border-radius: 8px;
                margin-bottom: 2rem;
                text-align: left;
            }

            .user-info p {
                margin: 0.5rem 0;
                color: #374151;
            }

            .actions {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            ::ng-deep .actions .p-button {
                width: 100%;
                padding: 0.75rem;
                border-radius: 8px;
            }

            @media (min-width: 640px) {
                .actions {
                    flex-direction: row;
                    justify-content: center;
                }

                ::ng-deep .actions .p-button {
                    width: auto;
                    min-width: 120px;
                }
            }
        `
    ]
})
export class AccessDeniedComponent implements OnInit {
    currentUser: any = null;

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.currentUser = this.authService.getCurrentUser();
    }

    goBack(): void {
        window.history.back();
    }

    goToDashboard(): void {
        this.router.navigate(['/dashboard']);
    }

    logout(): void {
        this.authService.logout().subscribe(() => {
            // Logout will automatically redirect to login page
        });
    }
}
