import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { MapComponent } from './map/map.component';
import { OverlayComponent } from './overlay/overlay.component';
import { SearchComponent } from './search/search.component';

@Component({
  imports: [CommonModule, MapComponent, OverlayComponent, SearchComponent],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'ip-address-tracker';
}
