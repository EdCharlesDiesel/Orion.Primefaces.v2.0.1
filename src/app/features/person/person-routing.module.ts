import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'address',
      data: {breadcrumb: 'Button'},
      loadChildren: () => import('./address/address.module').then(m => m.AddressModule)
    },
    // {
    //   path: 'error-log',
    //   data: {breadcrumb: 'Button'},
    //   loadChildren: () => import('./error-log/error-log.module').then(m => m.ErrorLogModule)
    // },
    // {
    //   path: 'database-log',
    //   data: {breadcrumb: 'List'},
    //   loadChildren: () => import('./database-log/database-log.module').then(m => m.DatabaseLogModule)
    // },
    // {
    //   path: 'transaction-history-archive',
    //   data: {breadcrumb: 'Charts'},
    //   loadChildren: () => import('./transaction-history-archive/transaction-history.module').then(m => m.TransactionHistoryModule)
    // },
    {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class PersonRoutingModule {
}
