import {CommonModule} from "@angular/common";

import {NgModule} from "@angular/core";
import {DatabaseLogModule} from "./database-log/database-log.module";
import {ErrorLogModule} from "./error-log/error-log.module";
import {SystemInformationModule} from "./system-information/system-information.module";
import {TransactionHistoryRoutingModule} from "./transaction-history-archive/transaction-history-routing.module";
import { AddressComponent } from "./address/address.component";
import { FeaturesRoutingModule } from "./feature-routing.module";

@NgModule({
    declarations: [],
    imports: [
    CommonModule,
    AddressComponent,
    DatabaseLogModule,
    ErrorLogModule,
    SystemInformationModule,
    TransactionHistoryRoutingModule,
    FeaturesRoutingModule
    ]
})
export class FeaturesModule { }
