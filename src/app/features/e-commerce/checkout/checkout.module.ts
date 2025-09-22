import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {CheckoutComponent} from './checkout.component';
import {CheckoutRoutingModule} from './checkout-routing.module';
import {ToolbarModule} from 'primeng/toolbar';
import {ButtonModule} from 'primeng/button';
import {RippleModule} from 'primeng/ripple';
import {SplitButtonModule} from 'primeng/splitbutton';
import {AccordionModule} from 'primeng/accordion';
import {TabViewModule} from 'primeng/tabview';
import {FieldsetModule} from 'primeng/fieldset';
import {MenuModule} from 'primeng/menu';
import {InputTextModule} from 'primeng/inputtext';
import {DividerModule} from 'primeng/divider';
import {SplitterModule} from 'primeng/splitter';
import {PanelModule} from 'primeng/panel';
import {CheckboxModule} from "primeng/checkbox";
import {InputNumberModule} from "primeng/inputnumber";
import {OverlayModule} from "primeng/overlay";
import {DropdownModule} from "primeng/dropdown";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CheckoutRoutingModule,
    ToolbarModule,
    ButtonModule,
    RippleModule,
    SplitButtonModule,
    AccordionModule,
    TabViewModule,
    FieldsetModule,
    MenuModule,
    InputTextModule,
    DividerModule,
    SplitterModule,
    CheckboxModule,
    InputNumberModule,
    PanelModule,
    OverlayModule,
    DropdownModule,
    NgOptimizedImage,

  ],
  declarations: [CheckoutComponent]
})
export class CheckoutModule {
}
