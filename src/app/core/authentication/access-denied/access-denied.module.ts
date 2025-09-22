import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from "primeng/ripple";
import {AccessDeniedComponent} from "./access-denied.component";

@NgModule({
  imports: [
    CommonModule,
    ButtonModule,
    NgOptimizedImage,
    RippleModule
  ],
  declarations: [AccessDeniedComponent]
})
export class AccessDeniedModule {
}
