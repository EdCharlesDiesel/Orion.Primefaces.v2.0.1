import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {DatabaseLogModule} from "./database-log/database-log.module";
import {ErrorLogModule} from "./error-log/error-log.module";
import {TransactionHistoryModule} from "./transaction-history-archive/transaction-history.module";
import {SystemInformationModule} from "./system-information/system-information.module";
import {TransactionHistoryRoutingModule} from "./transaction-history-archive/transaction-history-routing.module";

@NgModule({
	imports: [
		CommonModule,
		AdminRoutingModule,
    DatabaseLogModule,
    ErrorLogModule,
    SystemInformationModule,
    TransactionHistoryRoutingModule
	]
})
export class AdminModule { }
