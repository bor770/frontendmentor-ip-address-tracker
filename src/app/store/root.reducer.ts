import { RouterReducerState, routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';

interface State {
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = { router: routerReducer };
