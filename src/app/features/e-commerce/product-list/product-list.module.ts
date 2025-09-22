import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ProductListRoutingModule} from './product-list-routing.module';
import {ProductListComponent} from './product-list.component';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ToggleButtonModule} from 'primeng/togglebutton';

@NgModule({
  imports: [
    CommonModule,
    ProductListRoutingModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    ToggleButtonModule,
    NgOptimizedImage,
  ],
  declarations: [ProductListComponent]
})
export class ProductListModule {
}
