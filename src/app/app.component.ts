import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LetDirective } from '@ngrx/component';

import { BaseComponent } from './shared/base/base.component';
import { MapComponent } from './map/map.component';
import { OverlayComponent } from './overlay/overlay.component';
import { SearchComponent } from './search/search.component';

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
  styleUrls: [
    './styles/app.component.css',
    `./styles/mobile.app.component.css`,
    `./styles/desktop.app.component.css`,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent extends BaseComponent {}
