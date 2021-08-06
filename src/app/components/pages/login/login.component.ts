import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../service/users.service'
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
    ) { }

  redireccion() {
    this.router.navigate(["/registrarse"])
  }

  ngOnInit(): void {
    this.form = this.fb.group ({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.checkLocalStorage();
  }

  checkLocalStorage() {
    if(localStorage.getItem("token")){
      this.router.navigate(['bandejaprincipal']);
    }
  }

  signIn() {

      if(this.form.invalid) {
        return;
      }
      this.usersService.signIn(
        this.form.controls.email.value,
        this.form.controls.password.value)
        .pipe(map(token => this.router.navigate(['bandejaprincipal']))
      ).subscribe()

  }

}


