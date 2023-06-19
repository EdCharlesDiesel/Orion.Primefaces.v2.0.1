import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    // {
    //   path: 'registration',
    //   loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)
    // },
    // {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
    // {path: 'error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule)},
    // {path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule)},
    // {path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)},
    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class AppsRoutingModule {
}
