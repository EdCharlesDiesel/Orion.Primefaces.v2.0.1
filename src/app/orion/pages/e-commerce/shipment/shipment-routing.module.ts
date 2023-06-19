import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShipmentComponent } from './shipment.component';

@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: ShipmentComponent }
	])],
	exports: [RouterModule]
})
export class ShipmentRoutingModule { }
