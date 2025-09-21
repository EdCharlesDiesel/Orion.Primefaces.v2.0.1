import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {PaginatorModule} from "primeng/paginator";
import {SharedModule} from "primeng/api";
import {TableModule} from "primeng/table";
import {ToastModule} from "primeng/toast";
import {ReactiveFormsModule} from "@angular/forms";
import {ProgressBarModule} from "primeng/progressbar";
import {BadgeModule} from "primeng/badge";
import {AvatarModule} from "primeng/avatar";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {TagModule} from "primeng/tag";
import {ChipModule} from "primeng/chip";
import {SkeletonModule} from "primeng/skeleton";
import {AvatarGroupModule} from "primeng/avatargroup";
import {ScrollTopModule} from "primeng/scrolltop";
import {DatabaseLogService} from "../../admin/database-log/database-log.service";
import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';


@NgModule({
  declarations: [
    AddressComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
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
    DatabaseLogService
  ],
  exports: [
    AddressComponent
  ]
})
export class AddressModule { }
