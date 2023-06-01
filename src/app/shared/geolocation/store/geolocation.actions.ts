import { createAction, props } from '@ngrx/store';

import { GeolocationData } from '../geolocation.model';

export const clear = createAction(`[Geolocation] Clear`);
export const set = createAction(
  `[Geolocation] Set`,
  props<{ data: GeolocationData }>()
);
