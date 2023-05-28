import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { getRouterSelectors, ROUTER_NAVIGATED } from '@ngrx/router-store';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';

import { GeolocationData } from '../geolocation.model';
import * as GeolocationActions from './geolocation.actions';

@Injectable()
export class GeolocationEffects {
  apiKey = `at_U5J6BHKhhtJQ1ogWjDb22sQs9cvnJ`;
  url = `geo.ipify.org/api/v2/country,city`;

  fetch = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      concatLatestFrom(() =>
        this.store.select(getRouterSelectors().selectQueryParam(`ip`))
      ),
      switchMap(([, ip]) =>
        this.http
          .get<GeolocationData>(`https://${this.url}`, {
            params: { apiKey: this.apiKey, ipAddress: ip },
          })
          .pipe(map((data) => GeolocationActions.set({ data })))
      )
    );
  });

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store
  ) {}
}
