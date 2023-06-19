import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {InputTextModule} from 'primeng/inputtext';
import {RegistrationComponent} from "./registration.component";
import {AuthenticationService} from "../../../service/authentication.service";
import {LayoutService} from "../../../../layout/service/app.layout.service";
import {RegistrationRoutingModule} from "./registration-routing.module";
import {CalendarModule} from "primeng/calendar";
import {DividerModule} from "primeng/divider";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    RegistrationRoutingModule,
    InputTextModule,
    FormsModule,
    PasswordModule,
    ReactiveFormsModule,
    CalendarModule,
    DividerModule,
  ],
  declarations: [RegistrationComponent],
  providers: [
    AuthenticationService,
    LayoutService
  ]
})
export class RegistrationModule {
}
