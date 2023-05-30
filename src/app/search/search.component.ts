import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  imports: [CommonModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  selector: 'app-search',
  standalone: true,
  styleUrls: ['./search.component.css'],
  templateUrl: './search.component.html',
})
export class SearchComponent {}
