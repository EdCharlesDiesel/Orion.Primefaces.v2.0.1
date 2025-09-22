import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {UserManagementModule} from "./user-management/user-management.module";
import {UserManagementRoutingModule} from "./user-management/user-management-routing.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserManagementModule,
    UserManagementRoutingModule,
  ],
  declarations: []
})
export class AuthenticationModule {
}
