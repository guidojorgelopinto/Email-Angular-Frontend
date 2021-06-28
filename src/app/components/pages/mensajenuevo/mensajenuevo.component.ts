import {ElementRef, ViewChild, OnInit, Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips/chip-input';

@Component({
  selector: 'app-mensajenuevo',
  templateUrl: './mensajenuevo.component.html',
  styleUrls: ['./mensajenuevo.component.scss']})
export class MensajenuevoComponent implements OnInit {

  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  destinatarioCtrl = new FormControl();
  filteredDestinatarios: Observable<string[]>;
  destinatarios: string[] = ['guido@gmail.com'];
  allDestinatarios: string[] = ['lopinto@gmail.com'];

  @ViewChild('destinatarioInput')
  destinatarioInput!: ElementRef<HTMLInputElement>;

  constructor() {

    this.filteredDestinatarios = this.destinatarioCtrl.valueChanges.pipe(
        startWith(null),
        map((destinatario: string | null) => destinatario ? this._filter(destinatario) : this.allDestinatarios.slice()));
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our destinatario
    if (value) {
      this.destinatarios.push(value);
    }

    // Clear the input value
    // event.ChipInput!.clear();

    this.destinatarioCtrl.setValue(null);
  }

  remove(destinatario: string): void {
    const index = this.destinatarios.indexOf(destinatario);

    if (index >= 0) {
      this.destinatarios.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.destinatarios.push(event.option.viewValue);
    this.destinatarioInput.nativeElement.value = '';
    this.destinatarioCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allDestinatarios.filter(destinatario => destinatario.toLowerCase().includes(filterValue));
  }
}
