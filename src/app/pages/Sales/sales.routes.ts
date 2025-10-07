import { Routes } from '@angular/router';
import { CountryRegionCurrencyComponent } from './country-region-currency/country-region-currency.component';

export default [
    { path: 'country-region-currency', data: { breadcrumb: 'Button' }, component: CountryRegionCurrencyComponent },

    { path: '**', redirectTo: '/notfound' }
] as Routes;
