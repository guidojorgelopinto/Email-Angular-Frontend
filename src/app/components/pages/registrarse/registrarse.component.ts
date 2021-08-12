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
  complete= false;

  constructor
  (private fb: FormBuilder,
  private usersService: UsersService,
  private router: Router,
  )  {

    this.registerForm = this.fb.group ({
      lastName: ['', [Validators.required]],
      name: ['', [Validators.required]],
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
      password2: ['', [Validators.required]],
      email: ['',[Validators.required,Validators.email]],
      city: ['', [Validators.required]],
      country: ['', [Validators.required]],
    });
   }


  citys: Array<any> = [
    {value: 'Ninguno', viewValue: 'Ninguno'},
    {value: 'Cordoba', viewValue: 'Cordoba'},
    {value: 'Montevideo', viewValue: 'Montevideo'}
  ];

  countrys: Array<any> = [
    {value: 'Ninguno', viewValue: 'Ninguno'},
    {value: 'Argentina', viewValue: 'Argentina'},
    {value: 'Uruguay', viewValue: 'Uruguay'}
  ];

  ngOnInit(): void {  }

  signUp() {

    const registerUser : UserI = {
      lastName: this.registerForm.value.lastName,
      name: this.registerForm.value.name,
      userName: this.registerForm.value.userName,
      password: this.registerForm.value.password,
      password2: this.registerForm.value.password2,
      email: this.registerForm.value.email,
      country: this.registerForm.value.country,
      city: this.registerForm.value.city,
      token: '',
      userId: 0,
      role: 'USER'
    }
    console.log(registerUser);

    this.usersService.signUp(registerUser);
    this.falselogin();

  }

  falselogin(){
    this.complete= true;
    setTimeout(()=>{
      this.router.navigate(['/login']);
    },1500
    );
  }
}
