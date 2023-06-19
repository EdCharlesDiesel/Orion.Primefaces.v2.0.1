import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotfoundComponent} from './orion/components/notfound/notfound.component';
import {AppLayoutComponent} from "./layout/app.layout.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: AppLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./orion/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
          },
          {
            path: 'apps',
            loadChildren: () => import('./orion/pages/apps/apps.module').then(m => m.AppsModule)
          },
          {
            path: 'e-commerce',
            loadChildren: () => import('./orion/pages/e-commerce/e-commerce-routing.module').then(m => m.ECommerceRoutingModule)
          },
          {
            path: 'user-management',
            loadChildren: () => import('./orion/pages/user-management/user-management-routing.module').then(m => m.UserManagementRoutingModule)
          },
          {
            path: 'documentation',
            loadChildren: () => import('./orion/components/documentation/documentation.module').then(m => m.DocumentationModule)
          },
          {path: 'pages', loadChildren: () => import('./orion/components/pages/pages.module').then(m => m.PagesModule)},

        ]
      },
      {
        path: 'authentication',
        loadChildren: () => import('./orion/pages/authentication/auth.module').then(m => m.AuthModule)
      },

      {path: 'landing', loadChildren: () => import('./orion/pages/landing/landing.module').then(m => m.LandingModule)},
      {path: 'notfound', component: NotfoundComponent},
      {path: '**', redirectTo: '/notfound'},
    ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
