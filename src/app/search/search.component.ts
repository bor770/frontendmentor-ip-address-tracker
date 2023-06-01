import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Store } from '@ngrx/store';

import * as SearchActions from './store/search.actions';

@Component({
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  selector: 'app-search',
  standalone: true,
  styleUrls: ['./search.component.css'],
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  form: FormGroup;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      ip: new FormControl(null, [
        Validators.pattern(`^(?:[0-9]{1,3}.){3}[0-9]{1,3}$`),
        Validators.required,
      ]),
    });
  }

  redirect() {
    if (this.form.valid) {
      this.store.dispatch(SearchActions.redirect({ ip: this.form.value.ip }));
    }
  }
}
