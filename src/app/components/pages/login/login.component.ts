import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service'

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
      password: ['', Validators.required],
    })
  }
  ngOnInit(): void {
  }

  redireccion() {
    this.router.navigate(["/registrarse"])
  }

  singUp() {

    // const userName = this.form.get('userName').value
    // const password = this.form.get('password').value
    this.authService.singUp("userName", "password").subscribe( (res:any) => {
      console.log(res);
      localStorage.setItem ('token',res.token);
      this.router.navigate(['private']);
    })

  }

}
