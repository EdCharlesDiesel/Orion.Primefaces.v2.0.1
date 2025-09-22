import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProductOverviewRoutingModule} from './product-overview-routing.module';
import {ProductOverviewComponent} from './product-overview.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  imports: [
    CommonModule,
    ProductOverviewRoutingModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    ToggleButtonModule,
    NgOptimizedImage,
  ],
  declarations: [ProductOverviewComponent]
})
export class ProductOverviewModule {
}
