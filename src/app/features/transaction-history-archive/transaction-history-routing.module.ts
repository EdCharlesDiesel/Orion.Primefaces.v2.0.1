import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TransactionHistoryArchiveComponent} from "./transaction-history.component";



@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: TransactionHistoryArchiveComponent }
	])],
	exports: [RouterModule]
})
export class TransactionHistoryRoutingModule { }
