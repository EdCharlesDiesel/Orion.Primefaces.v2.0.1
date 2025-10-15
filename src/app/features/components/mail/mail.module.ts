import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail.component';
import {RippleModule} from "primeng/ripple";

@NgModule({
    imports: [CommonModule, MailRoutingModule, ButtonModule, NgOptimizedImage, RippleModule, MailComponent],
    declarations: []
})
export class MailModule {}
