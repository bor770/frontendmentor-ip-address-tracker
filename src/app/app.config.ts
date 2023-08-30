import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { AutoRedirectEffects } from './shared/auto-redirect/store/auto-redirect.effects';
import { GeolocationEffects } from './shared/geolocation/store/geolocation.effects';
import { LayoutEffects } from './shared/layout/store/layout.effects';
import { routes } from './app.routes';
import * as fromRoot from './store/root.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(AutoRedirectEffects, GeolocationEffects, LayoutEffects),
    provideHttpClient(),
    provideRouter(routes),
    provideRouterStore(),
    provideStore(fromRoot.appReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
