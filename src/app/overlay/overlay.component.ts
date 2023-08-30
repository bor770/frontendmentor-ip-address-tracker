import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LetDirective } from '@ngrx/component';
import { Observable } from 'rxjs';

import { BaseComponent } from '../shared/base/base.component';
import { OverlayData } from './overlay.model';
import * as fromRoot from '../store/root.reducer';

@Component({
  imports: [CommonModule, LetDirective],
  selector: 'app-overlay',
  standalone: true,
  styleUrls: [
    './styles/overlay.component.css',
    `./styles/mobile.overlay.component.css`,
    `./styles/desktop.overlay.component.css`,
  ],
  templateUrl: './overlay.component.html',
})
export class OverlayComponent extends BaseComponent implements OnInit {
  data$: Observable<OverlayData>;

  ngOnInit(): void {
    super.ngOnInit();

    this.data$ = this.store.select(fromRoot.selectGeolocationOverlayData);
  }
}
