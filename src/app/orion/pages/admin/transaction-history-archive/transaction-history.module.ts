import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionHistoryRoutingModule } from './transaction-history-routing.module';
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
import {TransactionHistoryComponent} from "./transaction-history.component";
import {TransactionHistoryService} from "./transaction-history.service";

@NgModule({
  declarations: [
    TransactionHistoryComponent
  ],
  imports: [
    CommonModule,
    TransactionHistoryRoutingModule,
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
    ToastModule
  ],
  providers: [
    TransactionHistoryService
  ],
  exports: [
    TransactionHistoryComponent
  ]
})
export class TransactionHistoryModule { }
