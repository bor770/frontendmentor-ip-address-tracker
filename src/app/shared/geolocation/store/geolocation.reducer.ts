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

export const getLocation = (state: State) =>
  `${state.location.city}, ${state.location.region}\n${state.location.postalCode}`;
export const getTimezone = (state: State) => state.location.timezone;
export const getIsp = (state: State) => state.isp;
export const getGeolocation = (state: State) => [
  state.location.lat,
  state.location.lng,
];
