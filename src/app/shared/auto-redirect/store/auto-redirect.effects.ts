import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { catchError, filter, of, switchMap, tap } from 'rxjs';

import { Ip } from '../../ip/ip.model';

@Injectable()
export class AutoRedirectEffects {
  ipifyUrl = `api.ipify.org/?format=json`;

  autoRedirect = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(routerNavigatedAction),
        filter(
          (navigatedAction) =>
            !navigatedAction.payload.routerState.root.firstChild
        ),
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
    private router: Router
  ) {}
}
