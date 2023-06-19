import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderSummaryComponent } from './order-summary.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: OrderSummaryComponent }
	])],
	exports: [RouterModule]
})
export class OrderSummaryRoutingModule { }
