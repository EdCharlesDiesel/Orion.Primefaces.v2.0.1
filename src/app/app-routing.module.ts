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
          {path: 'uikit', loadChildren: () => import('./orion/components/uikit/uikit.module').then(m => m.UIkitModule)},
          {
            path: 'utilities',
            loadChildren: () => import('./orion/components/utilities/utilities.module').then(m => m.UtilitiesModule)
          },
          {
            path: 'documentation',
            loadChildren: () => import('./orion/components/documentation/documentation.module').then(m => m.DocumentationModule)
          },
          {
            path: 'blocks',
            loadChildren: () => import('./orion/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule)
          },
          {path: 'pages', loadChildren: () => import('./orion/components/pages/pages.module').then(m => m.PagesModule)}
        ]
      },

      {
        path: 'authentication',
        loadChildren: () => import('./orion/pages/authentication/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'user-management',
        loadChildren: () => import('./orion/pages/user-management/user-management-routing.module').then(m => m.UserManagementRoutingModule)
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
