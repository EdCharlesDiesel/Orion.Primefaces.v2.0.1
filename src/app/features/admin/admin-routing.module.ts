import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'Database Logs',
      data: {breadcrumb: 'Button'},
      loadChildren: () => import('./database-log/database-log.module').then(m => m.DatabaseLogModule)
    },
    {
      path: 'Error Logs',
      data: {breadcrumb: 'Button'},
      loadChildren: () => import('./error-log/error-log.module').then(m => m.ErrorLogModule)
    },
    {
      path: 'System Information',
      data: {breadcrumb: 'List'},
      loadChildren: () => import('./system-information/system-information.module').then(m => m.SystemInformationModule)
    },
    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
