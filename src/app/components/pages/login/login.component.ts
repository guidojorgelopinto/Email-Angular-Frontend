import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service'
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
    private authService: AuthService
    ) { }

  redireccion() {
    this.router.navigate(["/registrarse"])
  }

  ngOnInit(): void {
    this.form = this.fb.group ({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  signIn() {

      if(this.form.invalid) {
        return;
      }
      this.authService.signIn("email", "password").pipe(
        map(token => this.router.navigate(['bandejaprincipal']))
      ).subscribe()

  }

}


