import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../store/root.reducer';

@Component({
  imports: [CommonModule],
  selector: 'app-overlay',
  standalone: true,
  styleUrls: ['./overlay.component.css'],
  templateUrl: './overlay.component.html',
})
export class OverlayComponent {
  data$ = this.store.select(fromRoot.selectOverlayData);

  constructor(private store: Store) {}
}
