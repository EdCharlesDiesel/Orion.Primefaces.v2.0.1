import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
    selector: 'orion-access-denied',
    templateUrl: './access-denied.component.html',
    styleUrl:'./access-denied.component.scss'

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
        // this.authService.logout().subscribe(() => {
        //     // Logout will automatically redirect to login page
        // });
    }
}
