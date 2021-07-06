import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component } from "@angular/core";
import { MatChipInputEvent } from "@angular/material/chips";
import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";

@Component({
  selector: 'app-mensajenuevo',
  templateUrl: './mensajenuevo.component.html',
  styleUrls: ['./mensajenuevo.component.scss']
})
export class MensajenuevoComponent {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  form: FormGroup;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group ({
      destinatarios: ['',Validators.required,Validators.email],
      asunto: ['', Validators.required],
      text144: ['', Validators.required],


    });
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  get destinatarioControls(): FormArray {
    return this.form.controls.destinatarios as FormArray;
  }



  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our destinatario
    if ((value || "").trim()) {
      this.destinatarioControls.push(this.fb.control(value));
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  remove(destinatario: string): void {
    const index = this.destinatarioControls.value.indexOf(destinatario);
    if (index >= 0) {
      this.destinatarioControls.removeAt(index);
    }
  }

    enviar() {

      const destinatario = this.form.value.destinatario;
      const asunto = this.form.value.asunto;
      const text144 = this.form.value.text144;

      console.log (destinatario);
      console.log (asunto);
      console.log (text144);

      }
  }
