import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';


import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';

@NgModule({
    imports: [
        CommonModule,
        CalendarRoutingModule,
        ButtonModule,

    ],
    declarations: [CalendarComponent]
})
export class CalendarModule { }
