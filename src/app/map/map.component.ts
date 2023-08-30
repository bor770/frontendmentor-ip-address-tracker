import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { LetDirective } from '@ngrx/component';
import { Marker } from 'leaflet';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import { MapOptions } from './map.model';
import * as fromRoot from '../store/root.reducer';

@Component({
  imports: [CommonModule, LeafletModule, LetDirective],
  selector: 'app-map',
  standalone: true,
  styleUrls: [
    './styles/map.component.css',
    `./styles/mobile.map.component.css`,
    `./styles/desktop.map.component.css`,
  ],
  templateUrl: './map.component.html',
})
export class MapComponent extends BaseComponent implements OnInit {
  layers$: Observable<Marker[]>;
  options$: Observable<MapOptions>;

  ngOnInit(): void {
    super.ngOnInit();

    this.layers$ = this.store.select(fromRoot.selectGeolocationMapLayers);
    this.options$ = this.store.select(fromRoot.selectGeolocationMapOptions);
  }
}
