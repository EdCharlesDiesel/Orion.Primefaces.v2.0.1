import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from './login.component';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {AuthenticationService} from "../../../shared/services/authentication.service";
import {RippleModule} from "primeng/ripple";
import {LayoutService} from "../../layout/service/app.layout.service";

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RippleModule
  ],
  declarations: [LoginComponent],
  providers: [AuthenticationService, LayoutService]
})
export class LoginModule {
}
