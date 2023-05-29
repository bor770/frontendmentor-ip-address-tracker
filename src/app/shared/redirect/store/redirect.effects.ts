import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, getRouterSelectors } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { catchError, filter, of, switchMap, tap } from 'rxjs';

import { Ip } from '../../ip/ip.model';

@Injectable()
export class RedirectEffects {
  ipifyUrl = `api.ipify.org/?format=json`;

  redirect = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(ROUTER_NAVIGATED),
        concatLatestFrom(() =>
          this.store.select(getRouterSelectors().selectRouteParam(`ip`))
        ),
        filter(([, ip]) => !ip),
        switchMap(() =>
          this.http.get<Ip>(`https://${this.ipifyUrl}`).pipe(
            tap((ipifyResponse) => {
              this.router.navigate([ipifyResponse.ip]);
            }),
            catchError(() => of())
          )
        )
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private store: Store
  ) {}
}
