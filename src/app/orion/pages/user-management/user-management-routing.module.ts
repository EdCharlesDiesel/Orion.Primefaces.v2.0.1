import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'list-users', loadChildren: () => import('./add-users/add-users.module').then(m => m.AddUsersModule)},
    {path: 'add-users', loadChildren: () => import('./list-users/list-users.module').then(m => m.ListUsersModule)},
    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {
}
