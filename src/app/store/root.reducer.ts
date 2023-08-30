import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

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
