import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
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
    console.log(this.form)
    this.authService.singIn().subscribe( (res:any) => {
      console.log(res);
      localStorage.setItem ('token',res.token);
      this.router.navigate(['private']);
    })

  }

}

