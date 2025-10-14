import { Routes } from '@angular/router';
import { Landing } from './app/pages/landing/landing';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/core/admin/dashboard/dashboard';
import { Documentation } from './app/core/admin/documentation/documentation';
import { DatabaseLog } from './app/core/admin/database-log/database-log';
import { Notfound } from './app/pages/notfound/notfound';
import { AuthGuard } from './app/core/authentication/auth.guard';
import { RoleGuard } from './app/core/authentication/role.guard';
import { AdminGuard } from './app/core/authentication/admin.guard';


export const appRoutes: Routes = [
    { path: '', component: Landing },
    { path: 'auth', loadChildren: () => import('./app/core/authentication/auth.routes') },
    { path: 'notfound', component: Notfound },
    {
        path: 'admin',
        component: AppLayout,
        canActivate: [AdminGuard],
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'human-resources', loadChildren: () => import('./app/core/admin/human-resources/human-resources.routes') },
            { path: 'person', loadChildren: () => import('./app/core/admin/person/person.routes') },
            { path: 'sales', loadChildren: () => import('./app/core/admin/sales/sales.routes') },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
            { path: 'database-log', component: DatabaseLog }
        ]
    },
    {
        path: 'superUser',
        component: AppLayout,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'human-resources', loadChildren: () => import('./app/core/admin/human-resources/human-resources.routes') },
            { path: 'person', loadChildren: () => import('./app/core/admin/person/person.routes') },
            { path: 'sales', loadChildren: () => import('./app/core/admin/sales/sales.routes') },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
            { path: 'database-log', component: DatabaseLog }
        ]
    },
    {
        path: 'customer',
        component: AppLayout,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'human-resources', loadChildren: () => import('./app/core/admin/human-resources/human-resources.routes') },
            { path: 'person', loadChildren: () => import('./app/core/admin/person/person.routes') },
            { path: 'sales', loadChildren: () => import('./app/core/admin/sales/sales.routes') },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
            { path: 'database-log', component: DatabaseLog }
        ]
    },
    {
        path: 'internal-employee',
        component: AppLayout,
        canActivate: [RoleGuard],
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'human-resources', loadChildren: () => import('./app/core/admin/human-resources/human-resources.routes') },
            { path: 'person', loadChildren: () => import('./app/core/admin/person/person.routes') },
            { path: 'sales', loadChildren: () => import('./app/core/admin/sales/sales.routes') },
            { path: 'documentation', component: Documentation },

        ]
    },
    {
        path: 'external-employee',
        component: AppLayout,
        canActivate: [RoleGuard],
        children: [
            { path: 'sales', loadChildren: () => import('./app/core/admin/sales/sales.routes') },
            { path: 'documentation', component: Documentation },
        ]
    },
    { path: '**', redirectTo: '/notfound' }
];
