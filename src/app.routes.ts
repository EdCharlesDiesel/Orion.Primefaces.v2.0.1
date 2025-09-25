// import { Routes } from '@angular/router';
// import { RegisterComponent } from './app/core/pages/register/register.component';
// import { AdminComponent } from './app/core/pages/admin.component';

// import { AccessDeniedComponent } from './app/core/authentication/access-denied';
// import { AdminDashboardComponent } from './app/core/pages/admin-dashboard/admin-dashboard.component';
// import { AdminUsersDashboardComponent } from './app/core/pages/admin-users-dashboard/admin-users-dashboard.component';
// import { AdminSettingsComponent } from './app/core/interceptors/admin-settings/admin-settings.component';
//
//
// let UsersComponent;
// const routes: Routes = [
//     // Public routes (no authentication required)
//     { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
//
//     // Auth routes (for non-authenticated users only)
//     {
//         path: 'login',
//         component: LoginComponent,
//         canActivate: [NoAuthGuard] // Prevent authenticated users from accessing
//     },
//     {
//         path: 'register',
//         component: RegisterComponent,
//         canActivate: [NoAuthGuard] // Prevent authenticated users from accessing
//     },
//
//     // Protected routes (authentication required)
//     {
//         path: 'dashboard',
//         component: DashboardComponent,
//         canActivate: [AuthGuard] // Basic authentication required
//     },
//
//     // Profile routes with ownership check
//     {
//         path: 'profile/:userId',
//         component: ProfileComponent,
//         canActivate: [AuthGuard, OwnershipGuard] // Must be authenticated and own the profile
//     },
//     {
//         path: 'profile',
//         component: ProfileComponent,
//         canActivate: [AuthGuard] // Current user's profile
//     },
//
//     // Role-based protected routes
//     {
//         path: 'admin',
//         component: AdminComponent,
//         canActivate: [AuthGuard],
//         data: { roles: ['admin'] }, // Only admin role allowed
//         children: [
//             {
//                 path: 'users',
//                 component: UsersComponent,
//                 canActivateChild: [RoleGuard],
//                 data: { roles: ['admin', 'moderator'] } // Admin or moderator roles
//             }
//         ]
//     },
//
//     // Alternative admin route using AdminGuard
//     {
//         path: 'admin-panel',
//         component: AdminComponent,
//         canActivate: [AdminGuard] // Dedicated admin guard
//     },
//
//     // Lazy-loaded module with authentication
//     {
//         path: 'reports',
//         loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule),
//         canLoad: [AuthGuard], // Prevents loading the module if not authenticated
//         data: { roles: ['admin', 'manager'] } // Role-based access
//     },
//
//     // Multiple role requirements
//     {
//         path: 'sensitive-data',
//         component: DashboardComponent, // Replace with actual component
//         canActivate: [AuthGuard],
//         data: { roles: ['admin', 'supervisor', 'manager'] } // Multiple allowed roles
//     },
//
//     // Access denied page
//     {
//         path: 'access-denied',
//         component: AccessDeniedComponent
//     },
//
//     // Wildcard route (should be last)
//     { path: '**', redirectTo: '/dashboard' }
// ];
// // Example of nested routes with guards
//
// const adminRoutes: Routes = [
//   {
//     path: 'admin',
//     canActivate: [AuthGuard, AdminGuard],
//     canActivateChild: [AdminGuard],
//     children: [
//       { path: '', component: AdminDashboardComponent },
//       { path: 'users', component: AdminUsersDashboardComponent },
//       { path: 'settings', component: AdminSettingsComponent },
//       {
//         path: 'reports',
//         component: AdminReportsComponent,
//         data: { roles: ['admin', 'super-admin'] } // Even more restrictive
//       }
//     ]
//   }
// ];
//
//
// @NgModule({
//     imports: [RouterModule.forRoot(routes, {
//         enableTracing: false, // Set to true for debugging
//         preloadingStrategy: PreloadAllModules // Optional: preload lazy modules
//     })],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }
//

import { AppLayout } from './app/layout/component/app.layout';
import { Routes } from '@angular/router';
import { DatabaseLog } from './app/pages/database-log/database-log';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { DashboardComponent } from './app/pages/dashboard/components/dashboard/dashboard.component';
export const appRoutes: Routes = [
    {
        path: '',
        component: AppLayout,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
            { path: 'database-log', component: DatabaseLog },
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    // { path: 'auth', loadChildren: () => import('./app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }
];
