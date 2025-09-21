import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ConfirmationService } from 'primeng/api';
import {DatabaseLogModule} from "./database-log/database-log.module";
import {DatabaseLogRoutingModule} from "./database-log/database-log-routing.module";
import {ErrorLogModule} from "./error-log/error-log.module";
import {ErrorLogRoutingModule} from "./error-log/error-log-routing.module";
import {SystemInformationModule} from "./system-information/system-information.module";
import {SystemInformationRoutingModule} from "./system-information/system-information-routing.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DatabaseLogModule,
    DatabaseLogRoutingModule,
    ErrorLogModule,
    ErrorLogRoutingModule,
    SystemInformationModule,
    SystemInformationRoutingModule,
  ],
  providers: [ConfirmationService]  // <-- Add this
})
export class AdminModule { }
