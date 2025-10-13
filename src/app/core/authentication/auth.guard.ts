import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    CanLoad,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Route,
    UrlSegment
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, take, catchError } from 'rxjs/operators';
import { AuthService } from './services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkAuth(state.url, route);
    }
    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkAuth(state.url, childRoute);
    }
    canLoad(
        route: Route,
        segments: UrlSegment[]
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const url = segments.map(segment => segment.path).join('/');
        return this.checkAuth(`/${url}`, null, route);
    }

    /**
     * Main authentication check logic
     */
    private checkAuth(
        url: string,
        routeSnapshot?: ActivatedRouteSnapshot | null,
        route?: Route
    ): Observable<boolean | UrlTree> {
        return this.authService.isAuthenticated$.pipe(
            take(1),
            map(isAuthenticated => {
                if (isAuthenticated) {
                    // Check for role-based access if specified
                    const requiredRoles = this.getRequiredRoles(routeSnapshot, route);
                    if (requiredRoles.length > 0) {
                        const hasRequiredRole = this.authService.hasAnyRole(requiredRoles);
                        if (!hasRequiredRole) {
                            console.warn('Access denied: Insufficient permissions');
                            return this.router.createUrlTree(['/access-denied']);
                        }
                    }
                    return true;
                } else {
                    // Store the attempted URL for redirect after login
                    this.authService.redirectUrl = url;
                    console.log('Access denied: Not authenticated. Redirecting to login.');
                    return this.router.createUrlTree(['/login']);
                }
            }),
            catchError(error => {
                console.error('Auth guard error:', error);
                return of(this.router.createUrlTree(['/login']));
            })
        );
    }
    private getRequiredRoles(
        routeSnapshot?: ActivatedRouteSnapshot | null,
        route?: Route
    ): string[] {
        let roles: string[] = [];

        if (routeSnapshot?.data?.['roles']) {
            roles = Array.isArray(routeSnapshot.data['roles'])
                ? routeSnapshot.data['roles']
                : [routeSnapshot.data['roles']];
        } else if (route?.data?.['roles']) {
            roles = Array.isArray(route.data['roles'])
                ? route.data['roles']
                : [route.data['roles']];
        }

        return roles;
    }
}
@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkRole(route);
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkRole(childRoute);
    }

    private checkRole(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
        return this.authService.isAuthenticated$.pipe(
            take(1),
            map(isAuthenticated => {
                if (!isAuthenticated) {
                    return this.router.createUrlTree(['/login']);
                }

                const requiredRoles = route.data?.['roles'] as string[] | string;
                if (!requiredRoles) {
                    return true; // No role requirement
                }

                const roles = Array.isArray(requiredRoles) ? requiredRoles : [requiredRoles];
                const hasRole = this.authService.hasAnyRole(roles);

                if (!hasRole) {
                    console.warn(`Access denied. Required roles: ${roles.join(', ')}`);
                    return this.router.createUrlTree(['/access-denied']);
                }

                return true;
            }),
            catchError(error => {
                console.error('Role guard error:', error);
                return of(this.router.createUrlTree(['/access-denied']));
            })
        );
    }
}

/**
 * Guard to prevent authenticated users from accessing auth pages
 */
@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isAuthenticated$.pipe(
            take(1),
            map(isAuthenticated => {
                if (isAuthenticated) {
                    // Redirect authenticated users to dashboard
                    return this.router.createUrlTree(['/dashboard']);
                }
                return true;
            }),
            catchError(error => {
                console.error('NoAuth guard error:', error);
                return of(true); // Allow access on error
            })
        );
    }
}

/**
 * Admin-only guard
 */
@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanActivateChild {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkAdmin();
    }

    canActivateChild(
        childRoute: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.checkAdmin();
    }

    private checkAdmin(): Observable<boolean | UrlTree> {
        return this.authService.isAuthenticated$.pipe(
            take(1),
            map(isAuthenticated => {
                if (!isAuthenticated) {
                    return this.router.createUrlTree(['/login']);
                }

                const isAdmin = this.authService.hasRole('admin');
                if (!isAdmin) {
                    console.warn('Access denied: Admin role required');
                    return this.router.createUrlTree(['/access-denied']);
                }

                return true;
            }),
            catchError(error => {
                console.error('Admin guard error:', error);
                return of(this.router.createUrlTree(['/access-denied']));
            })
        );
    }
}
@Injectable({
    providedIn: 'root'
})
export class OwnershipGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authService.isAuthenticated$.pipe(
            take(1),
            map(isAuthenticated => {
                if (!isAuthenticated) {
                    return this.router.createUrlTree(['/login']);
                }

                const currentUser = this.authService.getCurrentUser();
                const resourceUserId = route.params['userId'] || route.data?.['userId'];

                // Allow if user is admin
                if (this.authService.hasRole('admin')) {
                    return true;
                }

                // Check if user owns the resource
                if (currentUser?.id !== resourceUserId) {
                    console.warn('Access denied: User does not own this resource');
                    return this.router.createUrlTree(['/access-denied']);
                }

                return true;
            }),
            catchError(error => {
                console.error('Ownership guard error:', error);
                return of(this.router.createUrlTree(['/access-denied']));
            })
        );
    }
}


// import { CanActivateFn, Router } from '@angular/router';
// import { inject } from '@angular/core';
// import { AuthService } from './services/auth.service';
//
// export const authGuard: CanActivateFn = (route, state) => {
//     const authService = inject(AuthService);
//     const router = inject(Router);
//
//     if (authService.isLoggedInFake()) {
//         return true;
//     }
//
//     router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//     return false;
// };

