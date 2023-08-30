import { createAction, props } from '@ngrx/store';

import { Width } from '../layout.model';

export const setWidth = createAction(
  `[Layout] Set Width`,
  props<{ width: Width }>()
);
