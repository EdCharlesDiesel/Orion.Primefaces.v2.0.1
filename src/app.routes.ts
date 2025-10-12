import { Routes } from '@angular/router';
import { AppLayout } from './app/layout/component/app.layout';
import { Dashboard } from './app/pages/dashboard/dashboard';
import { Documentation } from './app/pages/documentation/documentation';
import { Landing } from './app/pages/landing/landing';
import { Notfound } from './app/pages/notfound/notfound';
import { DatabaseLog } from './app/pages/database-log/database-log';
import { authGuard } from './app/core/authentication/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: Landing },
    { path: 'auth', loadChildren: () => import('./app/core/authentication/auth.routes') },
    // { path: 'notfound', component: Notfound },
    {
        path: 'admin',
        component: AppLayout,
        // canActivate: [authGuard],
        children: [
            { path: 'dashboard', component: Dashboard },
            { path: 'human-resources', loadChildren: () => import('./app/pages/human-resources/human-resources.routes') },
            { path: 'person', loadChildren: () => import('./app/pages/person/person.routes') },
            { path: 'sales', loadChildren: () => import('./app/pages/sales/sales.routes') },
            { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') },
            { path: 'database-log', component: DatabaseLog }
        ]
    },
    // { path: '**', redirectTo: '/notfound' }
];
