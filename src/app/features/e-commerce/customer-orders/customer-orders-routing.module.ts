import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CustomerOrdersComponent} from "./customer-orders.component";

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: CustomerOrdersComponent}
  ])],
  exports: [RouterModule]
})
export class CustomerOrdersRoutingModule {
}
