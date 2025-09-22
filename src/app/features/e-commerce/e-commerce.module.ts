import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import {AddToCartComponent} from "./add-to-cart/add-to-cart.component";
import {CheckoutModule} from "./checkout/checkout.module";
import {CheckoutRoutingModule} from "./checkout/checkout-routing.module";

@NgModule({
	imports: [
		CommonModule,
    AddToCartComponent,
    CheckoutModule,
    CheckoutRoutingModule,
	]
})
export class ECommerceModule { }
