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

import {
  ProductSubscriptionComponent
} from "./orion/components/product/product-subscription/product-subscription.component";
import {AdminModule} from "./orion/pages/admin/admin.module";
import {HumanResourcesModule} from "./orion/pages/human-resources/human-resources.module";

@NgModule({
    declarations: [
        AppComponent, NotfoundComponent,ProductSubscriptionComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        AdminModule,
        HumanResourcesModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, AuthenticationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
