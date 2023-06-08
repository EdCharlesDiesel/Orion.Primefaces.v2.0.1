import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import {NotfoundComponent} from "./orion/components/notfound/notfound.component";
import {CustomerService} from "./orion/service/customer.service";
import {CountryService} from "./orion/service/country.service";
import {PhotoService} from "./orion/service/photo.service";
import {ProductService} from "./orion/service/product.service";
import {NodeService} from "./orion/service/node.service";
import {IconService} from "./orion/service/icon.service";
import {EventService} from "./orion/service/event.service";


@NgModule({
    declarations: [
        AppComponent, NotfoundComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
