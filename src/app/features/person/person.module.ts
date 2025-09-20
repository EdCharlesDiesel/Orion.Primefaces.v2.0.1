import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressRoutingModule} from "../address/address-routing.module";



@NgModule({
	imports: [
		CommonModule,

    AddressRoutingModule
    // DatabaseLogModule,
    // ErrorLogModule,
    // SystemInformationModule,
    // TransactionHistoryRoutingModule
	]
})
export class PersonModule { }
