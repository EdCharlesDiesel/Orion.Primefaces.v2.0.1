import {CommonModule} from "@angular/common";

import {NgModule} from "@angular/core";
import {DatabaseLogModule} from "./admin/database-log/database-log.module";
import {ErrorLogModule} from "./admin/error-log/error-log.module";
import {SystemInformationModule} from "./admin/system-information/system-information.module";
import {TransactionHistoryRoutingModule} from "./admin/transaction-history-archive/transaction-history-routing.module";
import { FeaturesRoutingModule } from "./production-routing.module";

@NgModule({
    declarations: [],
    imports: [
    CommonModule,
    DatabaseLogModule,
    ErrorLogModule,
    SystemInformationModule,
    TransactionHistoryRoutingModule,
    FeaturesRoutingModule
    ]
})
export class FeaturesModule { }
