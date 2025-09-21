
import {RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import { ContactTypeComponent } from "./contact-type.component";



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ContactTypeComponent }
	])],
	exports: [RouterModule]
})
export class ContactTypeRoutingModule { }
