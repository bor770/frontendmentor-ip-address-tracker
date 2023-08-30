import { createReducer, createSelector, on } from '@ngrx/store';
import { latLng, marker } from 'leaflet';

import { GeolocationData } from '../geolocation.model';
import { iconData, layers, zoom } from '../map.data';
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

const getLat = (state: State) => state.location?.lat;
const getLng = (state: State) => state.location?.lng;

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
