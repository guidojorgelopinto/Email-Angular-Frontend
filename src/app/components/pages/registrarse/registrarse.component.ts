import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { UserI } from '../../../models/user.interface';


@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {
  form1!: FormGroup;
  user!:UserI;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  citys: Array<any> = [
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


  signUp() {
    if (this.form1.invalid){
      return Object.values(this.form1.controls).forEach((control: { markAsTouched: () => void; }) => {
        control.markAsTouched();
      });
    }else{
      this.setUser();

    }

  }

    createForm() : void {

    this.form1 = this.fb.group ({
      lastName: ['', Validators.required],
      name: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['',Validators.required,Validators.email],
      city: ['', Validators.required],
      country: ['', Validators.required],

    });
  }

  setUser(): void {

      // this.user = {

      // lastName: this.form1.get('lastName').value,
      // name: this.form1.get('name').value,
      // userName: this.form1.get('userName').value,
      // email: this.form1.get('email').value,
      // password: this.form1.get('password').value,
      // confirmPassword: this.form1.get('confirmPassword').value,
      // city: this.form1.get('city').value,
      // country: this.form1.get('country').value
    };
  }

