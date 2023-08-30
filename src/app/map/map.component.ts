import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';
import { Marker } from 'leaflet';
import { Observable } from 'rxjs';

import { MapOptions } from './map.model';
import { Width } from '../shared/layout/layout.model';
import * as fromRoot from '../store/root.reducer';

@Component({
  imports: [CommonModule, LeafletModule, LetDirective],
  selector: 'app-map',
  standalone: true,
  styleUrls: [
    './styles/map.component.css',
    `./styles/mobile.map.component.css`,
  ],
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {
  layers$: Observable<Marker[]>;
  options$: Observable<MapOptions>;
  width$: Observable<Width>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.layers$ = this.store.select(fromRoot.selectGeolocationMapLayers);
    this.options$ = this.store.select(fromRoot.selectGeolocationMapOptions);
    this.width$ = this.store.select(fromRoot.selectLayoutWidth);
  }
}
