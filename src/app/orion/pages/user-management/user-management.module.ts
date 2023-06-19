import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementRoutingModule } from './user-management-routing.module';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    FormsModule
  ],
    declarations: [
    ]
})
export class UserManagementModule { }
