import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

export interface RootState {
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<RootState> = { router: routerReducer };
