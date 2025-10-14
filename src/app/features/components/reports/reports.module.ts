import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ButtonModule} from 'primeng/button';

import {ReportsRoutingModule} from './reports-routing.module';
import {ReportsComponent} from './reports.component';

@NgModule({
  imports: [
    CommonModule,
    ReportsRoutingModule,
    ButtonModule,
    NgOptimizedImage
  ],
  declarations: [ReportsComponent]
})
export class ReportsModule {
}
