
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { AddressTypesComponent } from "./address-types.component";


@NgModule({
  imports: [RouterModule.forChild([
    {path: '', component: AddressTypesComponent}
  ])],
  exports: [RouterModule]
})
export class AddressTypesRoutingModule {
}
