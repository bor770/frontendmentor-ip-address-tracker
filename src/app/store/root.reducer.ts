import {
  RouterReducerState,
  getRouterSelectors,
  routerReducer,
} from '@ngrx/router-store';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import { OverlayData } from '../overlay/overlay.model';
import * as fromGeolocation from '../shared/geolocation/store/geolocation.reducer';

interface State {
  geolocation: fromGeolocation.State;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  geolocation: fromGeolocation.geolocationReducer,
  router: routerReducer,
};

const selectGeolocation =
  createFeatureSelector<fromGeolocation.State>(`geolocation`);

export const selectGeolocationMapLayers = createSelector(
  selectGeolocation,
  fromGeolocation.selectMapLayers
);
export const selectGeolocationMapOptions = createSelector(
  selectGeolocation,
  fromGeolocation.selectMapOptions
);

const selectGeolocationOverlayData = createSelector(
  selectGeolocation,
  fromGeolocation.selectOverlayData
);

export const selectOverlayData = createSelector(
  selectGeolocationOverlayData,
  getRouterSelectors().selectRouteParam(`ip`),
  (overlayData: OverlayData, ip: string): OverlayData => [
    { content: ip, title: `ip address` },
    ...overlayData,
  ]
);
