import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MiscDemoComponent } from './new-product.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: MiscDemoComponent }
	])],
	exports: [RouterModule]
})
export class NewProductRoutingModule { }
