import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderHistoryComponent } from './order-history.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: OrderHistoryComponent }
	])],
	exports: [RouterModule]
})
export class OrderHistoryRoutingModule { }
