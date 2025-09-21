import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DatabaseLogComponent} from './database-log.component';
import {DatabaseLogRoutingModule} from './database-log-routing.module';
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
import {DatabaseLogService} from "./database-log.service";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {DialogModule} from "primeng/dialog";
import {ToastModule} from "primeng/toast";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DatabaseLogComponent
  ],
  imports: [
    CommonModule,
    DatabaseLogRoutingModule,
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

  ],
  providers: [
    DatabaseLogService
  ],
  exports: [
    DatabaseLogComponent
  ]
})
export class DatabaseLogModule {
}
