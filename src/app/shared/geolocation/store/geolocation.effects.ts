import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { routerNavigatedAction } from '@ngrx/router-store';
import { catchError, filter, map, of, switchMap } from 'rxjs';

import { GeolocationData } from '../geolocation.model';
import * as GeolocationActions from './geolocation.actions';

@Injectable()
export class GeolocationEffects {
  apiKey = `at_U5J6BHKhhtJQ1ogWjDb22sQs9cvnJ`;
  url = `geo.ipify.org/api/v2/country,city`;

  fetch = createEffect(() => {
    return this.actions$.pipe(
      ofType(routerNavigatedAction),
      map(
        (navigatedAction) => navigatedAction.payload.routerState.root.firstChild
      ),
      filter(
        (routerNavigatedActionFirstChild) => !!routerNavigatedActionFirstChild
      ),
      switchMap((routerNavigatedActionFirstChild) =>
        this.http
          .get<GeolocationData>(`https://${this.url}`, {
            params: {
              apiKey: this.apiKey,
              ipAddress: routerNavigatedActionFirstChild.params.ip,
            },
          })
          .pipe(
            map((data) => GeolocationActions.set({ data })),
            catchError(() => of())
          )
      )
    );
  });

  constructor(private actions$: Actions, private http: HttpClient) {}
}
