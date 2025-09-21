import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AddressComponent} from "./address.component";

@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AddressComponent},
  ])],
  exports: [RouterModule]
})
export class AddressRoutingModule {
}
