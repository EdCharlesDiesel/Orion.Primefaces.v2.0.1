import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import Aura from '@primeng/themes/aura';
import { providePrimeNG } from 'primeng/config';
import { appRoutes } from './app.routes';
import { ProductEffects } from './app/store/products/product.effects';
import { InMemoryDataService } from './app/service/in-memory-data.service';
import { cartReducer } from './app/store/cart/cart.reducer';
import { productReducer } from './app/store/products/product.reducer';

export const appConfig: ApplicationConfig = {
    providers: [
        provideStore({ products: productReducer ,cart: cartReducer }),
        provideEffects([ProductEffects]),
        provideStoreDevtools({
            name: 'Orion ERP',
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true,
            trace: false
        }),
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch()),
        importProvidersFrom(
            HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
                dataEncapsulation: false,
                delay: 500,
                passThruUnknownUrl: true
            })
        ),
        provideAnimationsAsync(),
        providePrimeNG({ theme: { preset: Aura, options: { darkModeSelector: '.app-dark' } } })
    ]
};
