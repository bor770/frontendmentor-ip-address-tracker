import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { createEffect } from '@ngrx/effects';
import { filter, map } from 'rxjs';

import * as LayoutActions from './layout.actions';

@Injectable()
export class LayoutEffects {
  setMobile = createEffect(() => {
    return this.breakpointObserver.observe(Breakpoints.XSmall).pipe(
      filter((result) => result.matches),
      map(() => LayoutActions.setWidth({ width: 'mobile' }))
    );
  });

  setDesktop = createEffect(() => {
    return this.breakpointObserver
      .observe([
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        filter((result) => result.matches),
        map(() => LayoutActions.setWidth({ width: 'desktop' }))
      );
  });

  constructor(private breakpointObserver: BreakpointObserver) {}
}
