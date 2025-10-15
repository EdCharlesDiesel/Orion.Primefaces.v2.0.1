import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { productReducer } from './app/store/products/product.reducer';
import { cartReducer } from './app/store/cart/cart.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from './app/store/products/product.effects';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
// import { InMemoryDataService } from './app/service/in-memory-data.service';


export const appConfig: ApplicationConfig = {
    providers: [
        provideStore({ products: productReducer ,cart: cartReducer }),
        provideEffects([ProductEffects]),
        // provideStoreDevtools({
        //     name: 'Orion ERP',
        //     maxAge: 25,
        //     logOnly: !isDevMode(),
        //     autoPause: true,
        //     trace: false
        // }),
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch()),
        // importProvidersFrom(
        //     HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
        //         dataEncapsulation: false,
        //         delay: 500,
        //         passThruUnknownUrl: true
        //     })
        // ),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } })
    ]
};
