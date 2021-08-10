import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../service/users.service';
import { UserI } from '../../../models/users.interface'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {
  registerForm: FormGroup;

  constructor
  (private fb: FormBuilder,
  private usersService: UsersService,
  private router: Router,
  )  {

    this.registerForm = this.fb.group ({
      lastName: ['lo pinto', [Validators.required]],
      name: ['guido', [Validators.required]],
      userName: ['guidojorge', [Validators.required]],
      password: ['123456', [Validators.required]],
      birthday: ['15-01-1989', [Validators.required]],
      email: ['guido@gmail.com',[Validators.required,Validators.email]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
   }


  citys: Array<any> = [
    {value: '0', viewValue: 'Ninguno'},
    {value: '1', viewValue: 'Buenos Aires'},
    {value: '2', viewValue: 'Montevideo'}
  ];

  countrys: Array<any> = [
    {value: '0', viewValue: 'Ninguno'},
    {value: '1', viewValue: 'Argentina'},
    {value: '2', viewValue: 'Uruguay'}
  ];

  ngOnInit(): void {  }

  singUp() {

    const registerUser : UserI = {
      lastName: this.registerForm.value.lastName,
      name: this.registerForm.value.name,
      userName: this.registerForm.value.userName,
      password: this.registerForm.value.password,
      birthday: this.registerForm.value.birthday,
      email: this.registerForm.value.email,
      country: this.registerForm.value.country,
      city: this.registerForm.value.city,
      token: '',
      userId: 0,
      role: 'USER',
      message: ''
    }

    // this.usersService.singUp(registerUser);
  }


}
