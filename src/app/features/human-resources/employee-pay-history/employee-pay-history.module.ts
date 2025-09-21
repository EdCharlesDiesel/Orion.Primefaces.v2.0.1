import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarModule } from 'primeng/progressbar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ScrollTopModule } from 'primeng/scrolltop';
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {ReactiveFormsModule} from "@angular/forms";
import {EmployeePayHistoryService} from "./employee-pay-history.service";
import {EmployeePayHistoryComponent} from "./employee-pay-history.component";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import { EmployeePayHistoryRoutingModule } from './employee-pay-history-routing.module';


@NgModule({
  declarations: [
    EmployeePayHistoryComponent
  ],
  imports: [
    CommonModule,
    EmployeePayHistoryRoutingModule,
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
    EmployeePayHistoryService
  ],
  exports: [
    EmployeePayHistoryComponent
  ]
})
export class EmployeePayHistoryModule { }
