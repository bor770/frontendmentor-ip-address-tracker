import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/root.reducer';

@Component({
  imports: [CommonModule, LeafletModule],
  selector: 'app-map',
  standalone: true,
  styleUrls: ['./map.component.css'],
  templateUrl: './map.component.html',
})
export class MapComponent {
  layers$ = this.store.select(fromRoot.selectGeolocationMapLayers);
  options$ = this.store.select(fromRoot.selectGeolocationMapOptions);

  constructor(private store: Store) {}
}
