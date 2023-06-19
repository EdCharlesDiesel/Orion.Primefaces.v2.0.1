import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductOverviewComponent } from './product-overview.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ProductOverviewComponent }
	])],
	exports: [RouterModule]
})
export class ProductOverviewRoutingModule { }
