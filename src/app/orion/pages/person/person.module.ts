import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AddressModule} from "./address/address.module";
import {AddressRoutingModule} from "./address/address-routing.module";

@NgModule({
	imports: [
		CommonModule,
		AddressModule,
    AddressRoutingModule
    // DatabaseLogModule,
    // ErrorLogModule,
    // SystemInformationModule,
    // TransactionHistoryRoutingModule
	]
})
export class PersonModule { }
