import { createReducer, on } from '@ngrx/store';

import { GeolocationData } from '../geolocation.model';
import * as GeolocationActions from './geolocation.actions';

export type State = GeolocationData;

const initialState: State = { isp: null, location: null };

export const geolocationReducer = createReducer(
  initialState,
  on(
    GeolocationActions.set,
    (state, { data }): State => ({ ...state, ...data })
  )
);
