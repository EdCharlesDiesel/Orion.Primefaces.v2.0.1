import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'system-information',
      data: {breadcrumb: 'Button'},
      loadChildren: () => import('./system-information/system-information.module').then(m => m.SystemInformationModule)
    },
    {
      path: 'error-log',
      data: {breadcrumb: 'Button'},
      loadChildren: () => import('./error-log/error-log.module').then(m => m.ErrorLogModule)
    },
    {
      path: 'database-log',
      data: {breadcrumb: 'List'},
      loadChildren: () => import('./database-log/database-log.module').then(m => m.DatabaseLogModule)
    },
    {
      path: 'transaction-history-archive',
      data: {breadcrumb: 'Charts'},
      loadChildren: () => import('./transaction-history-archive/transaction-history.module').then(m => m.TransactionHistoryModule)
    },
    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
