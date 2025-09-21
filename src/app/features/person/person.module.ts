import { BusinessEntityAddressModule } from './business-entity-address/business-entity-address.module';
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { ConfirmationService } from 'primeng/api';
import { AddressModule } from "./address/address.module";
import { AddressTypesModule } from "./address-types/address-types.module";
import { BusinessEntityContactModule } from './business-entity-contact/business-entity-contact.module';
import { BusinessEntityModule } from './business-entity/business-entity.module';
import { ContactTypeModule } from './contact-type/contact-type.module';
import { CountryRegionsModule } from './country-region/country-regions.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AddressModule,
    AddressTypesModule,
    BusinessEntityModule,
    BusinessEntityContactModule,
    BusinessEntityAddressModule,
    ContactTypeModule,
    CountryRegionsModule
    

  ],
  providers: [ConfirmationService]  // <-- Add this
})
export class PersonModule { }
