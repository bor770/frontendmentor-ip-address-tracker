import { createReducer, createSelector, on } from '@ngrx/store';
import { latLng, marker } from 'leaflet';

import { GeolocationData } from '../geolocation.model';
import { OverlayData } from '../../../overlay/overlay.model';
import * as GeolocationActions from './geolocation.actions';
import * as MapData from '../../../map/map.data';

export type State = GeolocationData;

const initialState: State = { isp: null, location: null };

export const geolocationReducer = createReducer(
  initialState,
  on(
    GeolocationActions.set,
    (state, { data }): State => ({ ...state, ...data })
  )
);

const selectIsp = (state: State) => state.isp;
const selectLat = (state: State) => state.location?.lat;
const selectLng = (state: State) => state.location?.lng;
const selectLocation = (state: State) =>
  `${state.location?.city}, ${state.location?.region} ${state.location?.postalCode}`;
const selectTimezone = (state: State) => state.location?.timezone;

export const selectMapLayers = createSelector(
  selectLat,
  selectLng,
  (lat: number, lng: number) =>
    lat && lng ? [marker([lat, lng], MapData.iconData)] : null
);
export const selectMapOptions = createSelector(
  selectLat,
  selectLng,
  (lat: number, lng: number) =>
    lat && lng
      ? { center: latLng(lat, lng), layers: MapData.layers, zoom: MapData.zoom }
      : null
);

export const selectOverlayData = createSelector(
  selectIsp,
  selectLocation,
  selectTimezone,
  (isp: string, location: string, timezone: string): OverlayData => [
    { content: location, title: `location` },
    { content: timezone, title: `timezone` },
    { content: isp, title: `isp` },
  ]
);
