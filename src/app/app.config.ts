import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import { RedirectEffects } from './shared/redirect/store/redirect.effects';
import { routes } from './app-routing';
import * as fromRoot from './store/root.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideEffects(RedirectEffects),
    provideHttpClient(),
    provideRouter(routes),
    provideRouterStore(),
    provideStore(fromRoot.reducers),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
