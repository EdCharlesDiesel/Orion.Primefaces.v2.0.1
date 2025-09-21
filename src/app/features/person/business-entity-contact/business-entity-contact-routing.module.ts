
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { BusinessEntityContactComponent } from "./business-entity-contact.component";


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: BusinessEntityContactComponent }
	])],
	exports: [RouterModule]
})
export class BusinessEntityContactRoutingModule { }
