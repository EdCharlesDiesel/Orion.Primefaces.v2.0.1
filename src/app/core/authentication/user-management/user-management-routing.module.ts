import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'add-users',
      loadChildren: () => import('./components/add-users/add-users.module').then(m => m.AddUsersModule)
    },
    {
      path: 'list-users',
      loadChildren: () => import('./components/user-calendar/user-calendar.module').then(m => m.UserCalendarModule)
    },
    {
      path: 'user-calendar',
      loadChildren: () => import('./components/user-calendar/user-calendar.module').then(m => m.UserCalendarModule)
    },
    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class UserManagementRoutingModule {
}
