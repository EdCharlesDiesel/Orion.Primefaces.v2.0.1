import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserManagementRoutingModule} from './user-management-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {AddUsersModule} from "./components/add-users/add-users.module";
import {ListUsersModule} from "./components/list-users/list-users.module";
import {UserCalendarModule} from "./components/user-calendar/user-calendar.module";

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule,
    AddUsersModule,
    ListUsersModule,
    UserCalendarModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    TableModule,
    ButtonModule,
  ],
  declarations: []
})
export class UserManagementModule {
}
