import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LetDirective } from '@ngrx/component';
import { Store } from '@ngrx/store';

import { BaseComponent } from '../shared/base/base.component';

@Component({
  imports: [CommonModule, LetDirective, ReactiveFormsModule],
  selector: 'app-search',
  standalone: true,
  styleUrls: [
    './styles/search.component.css',
    `./styles/mobile.search.component.css`,
    `./styles/desktop.search.component.css`,
  ],
  templateUrl: './search.component.html',
})
export class SearchComponent extends BaseComponent implements OnInit {
  form: FormGroup;
  private buttonHoverStatus = false;

  constructor(private router: Router, public store: Store) {
    super(store);
  }

  ngOnInit(): void {
    super.ngOnInit();

    this.form = new FormGroup({
      ip: new FormControl(null, Validators.required),
    });
  }

  get imgSrc() {
    return `../../assets/images/arrow${
      this.buttonHoverStatus ? '-hover' : ''
    }.svg`;
  }

  toggleButtonHoverStatus() {
    this.buttonHoverStatus = !this.buttonHoverStatus;
  }

  onSubmit() {
    this.router.navigate([this.form.value.ip]);
  }
}
