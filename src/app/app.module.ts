import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import {NotfoundComponent} from "./orion/components/notfound/notfound.component";
import {CustomerService} from "./orion/services/customer.service";
import {CountryService} from "./orion/services/country.service";
import {PhotoService} from "./orion/services/photo.service";
import {ProductService} from "./orion/services/product.service";
import {NodeService} from "./orion/services/node.service";
import {IconService} from "./orion/services/icon.service";
import {EventService} from "./orion/services/event.service";
import {AuthenticationService} from "./orion/services/authentication.service";
// import {ErrorComponent} from "./orion/shared/error/error.component";
import {
  AddtoproductsubscriptionComponent
} from "./orion/components/addtoProductSubscription/addtoProductSubscription.component";
import {
  ProductSubscriptionComponent
} from "./orion/components/product/product-subscription/product-subscription.component";


@NgModule({
    declarations: [
        AppComponent, NotfoundComponent,AddtoproductsubscriptionComponent,ProductSubscriptionComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
