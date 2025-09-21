import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


@NgModule({
  imports: [RouterModule.forChild([
    {
      path: 'address',
      data: {breadcrumb: 'Button'},
      loadChildren: () => import('./address/address.module').then(m => m.AddressModule)
    },

    // {path: '**', redirectTo: '/notfound'}
  ])],
  exports: [RouterModule]
})
export class HumanResourcesRoutingModule {
}
