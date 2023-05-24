import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

import * as fromRoot from './store/root.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideEffects(),
    provideHttpClient(),
    provideRouterStore(),
    provideStore(fromRoot.reducers),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
  ],
};
