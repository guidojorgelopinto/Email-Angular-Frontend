import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group ({
      lastName: ['', Validators.required],
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['',[Validators.required,Validators.email]],
      province: ['', Validators.required],
      country: ['', Validators.required],
    })
  }

  provinces: Array<any> = [
    {value: 'ninguno-0', viewValue: 'Ninguno'},
    {value: 'buenosaires-1', viewValue: 'Buenos Aires'},
    {value: 'montevideo-2', viewValue: 'Montevideo'}
  ];

  countrys: Array<any> = [
    {value: 'ninguno-0', viewValue: 'Ninguno'},
    {value: 'argentina-1', viewValue: 'Argentina'},
    {value: 'uruguay-2', viewValue: 'Uruguay'}
  ];

  ngOnInit(): void {
  }


  enviar() {

    const lastName = this.form.value.lastName;
    const name = this.form.value.name;
    const userName = this.form.value.userName;
    const password = this.form.value.password;
    const confirmPassword = this.form.value.confirmPassword;
    const email = this.form.value.email;
    const province = this.form.value.province;
    const country = this.form.value.country;

    console.log (lastName);
    console.log (name);
    console.log (userName);
    console.log (password);
    console.log (confirmPassword);
    console.log (email);
    console.log (province);
    console.log (country);
  }
}
