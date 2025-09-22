import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ButtonModule } from 'primeng/button';

import { MailRoutingModule } from './mail-routing.module';
import { MailComponent } from './mail.component';

@NgModule({
    imports: [
        CommonModule,
        MailRoutingModule,
        ButtonModule,
        NgOptimizedImage
    ],
    declarations: [MailComponent]
})
export class MailModule { }
