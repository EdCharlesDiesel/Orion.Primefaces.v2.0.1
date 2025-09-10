import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {TransactionHistoryComponent} from "./transaction-history.component";


@NgModule({
	imports: [RouterModule.forChild([
		{ path: '', component: TransactionHistoryComponent }
	])],
	exports: [RouterModule]
})
export class TransactionHistoryRoutingModule { }
