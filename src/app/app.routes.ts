import {Routes} from '@angular/router';
import {HomeComponent} from "./features/home/components/home.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";
import {inject} from "@angular/core";
import {UserManagementService} from "./core/authentication/services/user-management.service";
import {map} from "rxjs/operators";


export const routes: Routes = [
  {path: 'welcome', component: HomeComponent},
  {
    path: "login",
    loadComponent: () => import("./core/authentication/authentication.component"),
    // canActivate: [
    //   () => inject(UserManagementService).isAuthenticated.pipe(map((isAuth) => !isAuth)),
    // ],
  },
  {
    path: "register",
    loadComponent: () => import("./core/authentication/authentication.component"),
    canActivate: [
      () => inject(UserManagementService).isAuthenticated.pipe(map((isAuth) => !isAuth)),
    ],
  },
  {
    path: "settings",
    loadChildren: () => import("./shared/components/settings/settings.module").then(c => c.SettingsModule),
    canActivate: [() => inject(UserManagementService).isAuthenticated],
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./features/home/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'human-resources',
    loadChildren: () => import('./../app/features/human-resources/human-resources-routing.module').then(m => m.HumanResourcesRoutingModule)
  },
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
    loadChildren: () => import('./core/authentication/services/user-management.service').then(m => m.UserManagementService)
  },
  {
    path: 'documentation',
    loadChildren: () => import('./shared/utilities/documentation/documentation.module').then(m => m.DocumentationModule)
  },
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}];
