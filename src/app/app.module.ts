import {NgModule} from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {NotfoundComponent} from "./features/notfound/notfound.component";
import {ProductSubscriptionComponent} from "./features/production/product/product-subscription/product-subscription.component";
import {AppLayoutModule} from "./core/layout/app.layout.module";
import {HumanResourcesModule} from "./features/human-resources/human-resources.module";
import {CountryService} from "./shared/services/country.service";
import {CustomerService} from "./shared/services/customer.service";
import {EventService} from "./shared/services/event.service";
import {AuthenticationService} from "./shared/services/authentication.service";
import {IconService} from "./shared/services/icon.service";
import {NodeService} from "./shared/services/node.service";
import {ProductService} from "./shared/services/product.service";
import {PhotoService} from "./shared/services/photo.service";
import {AdminModule} from "./features/admin/admin.module";


@NgModule({
  declarations: [
    NotfoundComponent, ProductSubscriptionComponent
  ],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    HumanResourcesModule,
    AdminModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CountryService, CustomerService, EventService, IconService, NodeService,
    PhotoService, ProductService, AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
