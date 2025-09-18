import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NewProductComponent} from "./new-product.component";


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: NewProductComponent }
	])],
	exports: [RouterModule]
})
export class NewProductRoutingModule { }
