import { createReducer, on } from '@ngrx/store';

import { Width } from '../layout.model';
import * as LayoutActions from './layout.actions';

export interface State {
  width: Width;
}

const initialState: State = { width: null };

export const layoutReducer = createReducer(
  initialState,
  on(LayoutActions.setWidth, (state, { width }): State => ({ ...state, width }))
);

export const getWidth = (state: State) => state.width;
