import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-overlay',
  standalone: true,
  styleUrls: ['./overlay.component.css'],
  templateUrl: './overlay.component.html',
})
export class OverlayComponent {
  data = []
}
