import { Injectable } from '@angular/core';
import {
  Actions,
  createEffect,
  ofType,
  ROOT_EFFECTS_INIT,
} from '@ngrx/effects';

@Injectable()
export class OverlayEffects {
  fetchIP = createEffect(
    () => {
      return this.actions$.pipe(ofType(ROOT_EFFECTS_INIT));
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions) {}
}
