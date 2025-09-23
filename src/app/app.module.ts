import {NgModule} from "@angular/core";
import {AppRoutingModule} from "./app-routing.module";
import {AppLayoutModule} from "./core/layout/app.layout.module";
import {AuthenticationService} from "./shared/services/authentication.service";
import {EventService} from "./shared/services/event.service";
import {IconService} from "./shared/services/icon.service";
import {NodeService} from "./shared/services/node.service";
import {CountryService} from "./shared/services/country.service";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AuthenticationModule} from "./core/authentication/authentication.module";
import {NotfoundComponent} from "./shared/components/notfound/notfound.component";
import {HumanResourcesModule} from "./features/human-resources/human-resources.module";
import {AdminModule} from "./features/admin/admin.module";
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    NotfoundComponent,AppComponent
  ],
  imports: [
    AppRoutingModule,
    AppLayoutModule,
    AuthenticationModule,
    HumanResourcesModule,
    AdminModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    CountryService, EventService, IconService, NodeService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule{}
