import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import { UserManagementRoutingModule } from './user-management/user-management-routing.module';
import { UserManagementModule } from './user-management/user-management.module';

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
