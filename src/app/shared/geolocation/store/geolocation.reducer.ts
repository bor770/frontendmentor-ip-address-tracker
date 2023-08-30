import { createReducer, createSelector, on } from '@ngrx/store';
import { latLng, marker } from 'leaflet';

import { GeolocationData } from '../geolocation.model';
import { iconData, layers, zoom } from '../map.data';
import * as GeolocationActions from './geolocation.actions';
import { OverlayData } from 'src/app/overlay/overlay.model';

export type State = GeolocationData;

const initialState: State = { isp: null, location: null };

export const geolocationReducer = createReducer(
  initialState,
  on(
    GeolocationActions.set,
    (state, { data }): State => ({ ...state, ...data })
  )
);

const getISP = (state: State) => state.isp;
const getLat = (state: State) => state.location?.lat;
const getLng = (state: State) => state.location?.lng;
const getLocation = (state: State) =>
  `${state.location?.city}, ${state.location?.region} ${state.location?.postalCode}`;
const getTimeZone = (state: State) => state.location?.timezone;

export const selectMapLayers = createSelector(
  getLat,
  getLng,
  (lat: number, lng: number) =>
    lat && lng ? [marker([lat, lng], iconData)] : null
);
export const selectMapOptions = createSelector(
  getLat,
  getLng,
  (lat: number, lng: number) =>
    lat && lng ? { center: latLng(lat, lng), layers: layers, zoom: zoom } : null
);

export const selectOverlayData = createSelector(
  getISP,
  getLocation,
  getTimeZone,
  (isp: string, location: string, timezone: string): OverlayData => [
    { key: `location`, value: location },
    { key: `timezone`, value: timezone },
    { key: `isp`, value: isp },
  ]
);
