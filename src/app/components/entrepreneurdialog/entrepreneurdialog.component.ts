import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Tipo {
  name: string;
}

@Component({
  selector: 'app-entrepreneurdialog',
  templateUrl: './entrepreneurdialog.component.html',
  styleUrls: ['./entrepreneurdialog.component.scss'],
})
export class EntrepreneurdialogComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  tipos: Tipo[] = [
    {name: 'Marketing'},
    {name: 'Programacion'},
    {name: 'Diseño'},
  ];
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.tipos.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }
  remove(tipo: Tipo): void {
    const index = this.tipos.indexOf(tipo);

    if (index >= 0) {
      this.tipos.splice(index, 1);
    }
  }
  constructor() {}

  ngOnInit(): void {}
}
