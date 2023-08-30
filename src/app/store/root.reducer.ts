import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';

import * as fromGeolocation from '../shared/geolocation/store/geolocation.reducer';
import * as fromLayout from '../shared/layout/store/layout.reducer';

interface State {
  geolocation: fromGeolocation.State;
  layout: fromLayout.State;
  router: RouterReducerState;
}

export const appReducer: ActionReducerMap<State> = {
  geolocation: fromGeolocation.geolocationReducer,
  layout: fromLayout.layoutReducer,
  router: routerReducer,
};

const selectGeolocationState =
  createFeatureSelector<fromGeolocation.State>(`geolocation`);

export const selectGeolocationMapLayers = createSelector(
  selectGeolocationState,
  fromGeolocation.selectMapLayers
);
export const selectGeolocationMapOptions = createSelector(
  selectGeolocationState,
  fromGeolocation.selectMapOptions
);

const selectLayout = createFeatureSelector<fromLayout.State>(`layout`);

export const selectLayoutWidth = createSelector(
  selectLayout,
  fromLayout.getWidth
);
