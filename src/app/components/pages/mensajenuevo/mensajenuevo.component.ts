import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup} from '@angular/forms';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';



interface Destinatario {
  name: string;
}

@Component({
  selector: 'app-mensajenuevo',
  templateUrl: './mensajenuevo.component.html',
  styleUrls: ['./mensajenuevo.component.scss']
})
export class MensajenuevoComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group ({
    })
  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  destinatarios: Destinatario[] = [
    {name: ''},
  ];

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.destinatarios.push({name: value});
    }

    // // Clear the input value
    // event.chipInput!.clear();
  }

  remove(destinatario: Destinatario): void {
    const index = this.destinatarios.indexOf(destinatario);

    if (index >= 0) {
      this.destinatarios.splice(index, 1);
    }
  }


  ngOnInit(): void {

  }

  enviar() {

    const contact = this.form.value.contact;

    console.log (contact);

  }
}
