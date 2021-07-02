import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;


  constructor(private fb: FormBuilder, private router: Router,
    ) {
    this.form = this.fb.group ({
      userName: ['', Validators.required],
      pass: ['', Validators.required],
    })
  }
  ngOnInit(): void {
  }

  redireccion() {
    this.router.navigate(["/registrarse"])

  }

  logIn() {

    const userName = this.form.value.userName;
    const pass = this.form.value.pass;

    console.log (userName);
    console.log (pass);
  }

  }

