import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { MapComponent } from './map/map.component';
import { OverlayComponent } from './overlay/overlay.component';
import { SearchComponent } from './search/search.component';
import { Width } from './shared/layout/layout.model';
import * as fromRoot from './store/root.reducer';

@Component({
  imports: [
    CommonModule,
    LetDirective,
    MapComponent,
    OverlayComponent,
    SearchComponent,
  ],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  width$: Observable<Width>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.width$ = this.store.select(fromRoot.selectLayoutWidth);
  }
}
