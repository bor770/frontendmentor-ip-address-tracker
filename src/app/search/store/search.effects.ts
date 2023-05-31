import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs';

import * as SearchActions from './search.actions';

@Injectable()
export class SearchEffects {
  redirect = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(SearchActions.redirect),
        tap((redirectAction) => {
          this.router.navigate([redirectAction.ip]);
        })
      );
    },
    { dispatch: false }
  );

  constructor(private actions$: Actions, private router: Router) {}
}
