
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { BusinessEntityAddress } from "src/app/core/models/business-entity-address.model";



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: BusinessEntityAddress }
	])],
	exports: [RouterModule]
})
export class BusinessEntityAddressRoutingModule { }
