import { Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { AddressTypeComponent } from './address-type/address-type.component';
import { ContactTypeComponent } from './contact-type/contact-type.component';
import { PersonPhoneComponent } from './person-phone/person-phone.component';
import { StateProvinceComponent } from './state-province/state-province.component';
import { PhoneNumberTypeComponent } from './phone-number-type/phone-number-type.component';
import { EmailAddressComponent } from './email-address/email-address.component';
import { CountryRegionComponent } from './country-region/country-region.component';
import { BusinessEntityAddressComponent } from './business-entity-address/business-entity-address.component';
import { BusinessEntityContactComponent } from './business-entity-contact/business-entity-contact.component';
import { PersonComponent } from './person/person.component';

export default [
    { path: 'addresses', data: { breadcrumb: 'Button' }, component: AddressComponent },
    { path: 'address-type', data: { breadcrumb: 'Button' }, component: AddressTypeComponent },
     { path: 'business-entity-address', data: { breadcrumb: 'Button' }, component: BusinessEntityAddressComponent },
    { path: 'business-entity-contact', data: { breadcrumb: 'Button' }, component: BusinessEntityContactComponent },
    { path: 'contact-type', data: { breadcrumb: 'Button' }, component: ContactTypeComponent },
    { path: 'country-region', data: { breadcrumb: 'Button' }, component: CountryRegionComponent },
    { path: 'email-address', data: { breadcrumb: 'Button' }, component: EmailAddressComponent },
    { path: 'person', data: { breadcrumb: 'Button' }, component: PersonComponent },
    { path: 'person-phone', data: { breadcrumb: 'Button' }, component: PersonPhoneComponent },
    { path: 'phone-number-type', data: { breadcrumb: 'Button' }, component: PhoneNumberTypeComponent },
    { path: 'state-province', data: { breadcrumb: 'Button' }, component: StateProvinceComponent },
    { path: '**', redirectTo: '/notfound' }
] as Routes;
