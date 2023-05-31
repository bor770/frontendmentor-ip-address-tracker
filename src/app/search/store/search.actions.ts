import { createAction, props } from '@ngrx/store';

export const redirect = createAction(
  `[Search] Redirect`,
  props<{ ip: string }>()
);
