import {inject, NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppLayoutComponent} from "./core/layout/app.layout.component";
import {UserManagementService} from "./core/auth/services/user-management.service";
import {map} from "rxjs/operators";
import {NotfoundComponent} from "./features/notfound/notfound.component";


@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: AppLayoutComponent,
        children: [
          {
            path: "",
            loadComponent: () => import("./features/home/components/home.component"),
          },
          {
            path: "login",
            loadComponent: () => import("./core/auth/auth.component"),
            canActivate: [
              () => inject(UserManagementService).isAuthenticated.pipe(map((isAuth) => !isAuth)),
            ],
          },
          {
            path: "register",
            loadComponent: () => import("./core/auth/auth.component"),
            canActivate: [
              () => inject(UserManagementService).isAuthenticated.pipe(map((isAuth) => !isAuth)),
            ],
          },
          {
            path: "settings",
            loadChildren: () => import("./features/settings/settings.module").then(c => c.SettingsModule),
            canActivate: [() => inject(UserManagementService).isAuthenticated],
          },
          {
            path: "profile",
            loadChildren: () => import("./features/profile/profile.routes"),
          },
          // {
          //   path: "editor",
          //   children: [
          //     {
          //       path: "",
          //       loadComponent: () =>
          //         import("./features/article/pages/editor/editor.component"),
          //       canActivate: [() => inject(UserManagementService).isAuthenticated],
          //     },
          //     {
          //       path: ":slug",
          //       loadComponent: () =>
          //         import("./features/article/pages/editor/editor.component"),
          //       canActivate: [() => inject(UserManagementService).isAuthenticated],
          //     },
          //   ],
          // },
          // {
          //   path: "article/:slug",
          //   loadComponent: () =>
          //     import("./features/article/pages/article/article.component"),
          // },
          {
            path: 'dashboard',
            loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule)
          },
          // {
          //   path: 'admin',
          //   loadChildren: () => import('./../app/features/admin/admin.module').then(m => m.AdminModule)
          // } ,
          {
            path: 'human-resources',
            loadChildren: () => import('./../app/features/human-resources/departments/departments.module').then(m => m.DepartmentsModule)
          }  ,
          {
            path: 'person',
            loadChildren: () => import('./../app/features/person/person.module').then(m => m.PersonModule)
          },
          {
            path: 'apps',
            loadChildren: () => import('./../app/features/apps/apps.module').then(m => m.AppsModule)
          },
          {
            path: 'e-commerce',
            loadChildren: () => import('./../app/features/e-commerce/e-commerce-routing.module').then(m => m.ECommerceRoutingModule)
          },
          {
            path: 'user-management',
            loadChildren: () => import('./../app/core/auth/services/user-management.service').then(m => m.UserManagementService)
          },
          {
            path: 'documentation',
            loadChildren: () => import('./../app/features/documentation/documentation.module').then(m => m.DocumentationModule)
          },
          // {path: 'pages', loadChildren: () => import('./../app/features/pages.module').then(m => m.PagesModule)},

        ]
      },
      // {
      //   path: 'authentication',
      //   loadChildren: () => import('./orion/pages/authentication/auth.module').then(m => m.AuthModule)
      // },
      // {
      //   path: RouteUrls.LOGIN,
      //   canLoad: [NotAuthenticatedGuard],
      //   canActivate: [NotAuthenticatedGuard],
      //   loadChildren: () => import('src/app/orion/pages/user-management/user-management-routing.module').then(m => m.UserManagementRoutingModule)
      // },
      // {
      //   path: RouteUrls.CHAT,
      //   canLoad: [AuthenticatedGuard],
      //   canActivate: [AuthenticatedGuard],
      //   loadChildren: () => import('src/app/orion/components/features/chat/chat.module').then(m => m.ChatModule)
      // },
      // {path: 'landing', loadChildren: () => import('./orion/pages/landing/landing.module').then(m => m.LandingModule)},
      {path: 'notfound', component: NotfoundComponent},
      // {path: '**', redirectTo: '/notfound'},
    ], {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
