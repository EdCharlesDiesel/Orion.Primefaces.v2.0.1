import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {NotfoundComponent} from "./features/notfound/notfound.component";
import {ProductSubscriptionComponent} from "./features/product/product-subscription/product-subscription.component";
import {AppLayoutModule} from "./core/layout/app.layout.module";
import {AdminModule} from "./features/admin/admin.module";
import {HumanResourcesModule} from "./features/human-resources/human-resources.module";
import {CountryService} from "./features/services/country.service";
import {CustomerService} from "./features/services/customer.service";
import {EventService} from "./features/services/event.service";
import {AuthenticationService} from "./features/services/authentication.service";
import {IconService} from "./features/services/icon.service";
import {NodeService} from "./features/services/node.service";
import {ProductService} from "./features/services/product.service";
import {PhotoService} from "./features/services/photo.service";


@NgModule({
    declarations: [
       NotfoundComponent,ProductSubscriptionComponent
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
    // bootstrap: [AppComponent]
})
export class AppModule { }
