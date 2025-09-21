import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressBarModule} from 'primeng/progressbar';
import {BadgeModule} from 'primeng/badge';
import {AvatarModule} from 'primeng/avatar';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TagModule} from 'primeng/tag';
import {ChipModule} from 'primeng/chip';
import {SkeletonModule} from 'primeng/skeleton';
import {ButtonModule} from 'primeng/button';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {ScrollTopModule} from 'primeng/scrolltop';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {ReactiveFormsModule} from "@angular/forms";
import {InternalEmployeesService} from "./internal-employees.service";
import {EmployeePayHistoryComponent} from "../employee-pay-history/employee-pay-history.component";
import {InternalEmployeesComponent} from "./internal-employees.component";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InternalEmployeesRoutingModule} from "./internal-employees-routing.module";

@NgModule({
  declarations: [
    InternalEmployeesComponent
  ],
  imports: [
    CommonModule,
    InternalEmployeesRoutingModule,
    ProgressBarModule,
    BadgeModule,
    AvatarModule,
    ScrollPanelModule,
    TagModule,
    ChipModule,
    ButtonModule,
    SkeletonModule,
    AvatarGroupModule,
    ScrollTopModule,
    CardModule,
    TableModule,
    DialogModule,
    ToastModule,
    ReactiveFormsModule,
    ConfirmDialogModule
  ],
  providers: [
    InternalEmployeesService
  ],
  exports: [
    InternalEmployeesComponent
  ]
})
export class InternalEmployeesModule {
}
