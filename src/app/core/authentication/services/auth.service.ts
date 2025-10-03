// Add this property and method to your existing AuthService

import { Observable, of } from 'rxjs';
import { AuthResponse } from '../../models/auth-response.model';
//import { Result } from '../../../pages/departments/departments.service';



class LoginRequest {
}

export class AuthService {
    // ... existing code ...

    // Add this property for storing redirect URL
    public redirectUrl: string | null = null;

    // ... existing methods ...

    // Update the handleAuthSuccess method to handle redirect
    private isAuthenticatedSubject: any;
    isAuthenticated$: any;
    private currentUserSubject: any;
    token: any;
    private router: any;
    private handleAuthSuccess(response: AuthResponse): void {
        this.storeToken(response.token);
        if (response.refreshToken) {
            this.storeRefreshToken(response.refreshToken);
        }
        this.storeUser(response.user);
        this.currentUserSubject.next(response.user);
        this.isAuthenticatedSubject.next(true);

        // Handle redirect after successful authentication
        if (this.redirectUrl) {
            this.router.navigate([this.redirectUrl]);
            this.redirectUrl = null;
        }
    }

    // Add method to get redirect URL and clear it
    getAndClearRedirectUrl(): string | null {
        const url = this.redirectUrl;
        this.redirectUrl = null;
        return url;
    }

    // ... rest of existing code ...
    private storeToken(token: any) {

    }

    private storeRefreshToken(refreshToken: boolean) {

    }

    public hasAnyRole(requiredRoles: string[]): string {
        const roles = requiredRoles.join(',');
        return roles;
    }

    hasRole(admin: string) {

    }

    isAuthenticated() {
        return false;
    }

    private storeUser(user: any) {

    }

    login(loginData: LoginRequest) {

    }

    getCurrentUser() {

    }

    logout() {

    }

    // @ts-ignore
    public register(registerData: any): Observable<void> {

    }

    // requestPasswordReset(email: any): Observable<void> {
    //
    //     return of(any)
    // }
    requestPasswordReset(email: any) {

    }

    changePassword = (currentPassword: any, newPassword: any) => {

    };
}
