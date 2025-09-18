import {FeaturesRoutingModule} from "./feature-routing.module";
import {CommonModule} from "@angular/common";
import {AdminRoutingModule} from "./admin/admin-routing.module";
import {NgModule} from "@angular/core";
import {DatabaseLogModule} from "./database-log/database-log.module";
import {ErrorLogModule} from "./error-log/error-log.module";
import {SystemInformationModule} from "./system-information/system-information.module";
import {TransactionHistoryRoutingModule} from "./transaction-history-archive/transaction-history-routing.module";

@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      AdminRoutingModule,
      DatabaseLogModule,
      ErrorLogModule,
      SystemInformationModule,
      TransactionHistoryRoutingModule,
    ]
})
export class FeaturesModule { }
