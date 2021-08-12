import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  _userService!: UsersService;

  form = this.fb.group ({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private usersService: UsersService
    ) { }

  redireccion() {
    this.router.navigate(["/registrarse"])
  }

  ngOnInit(): void { }

  signIn(): void{
    const formValue = this.form.value;
    this.usersService.signIn(formValue).subscribe((res) => {
      if (res){
        this.router.navigate(['bandejaprincipal']);
      }
    });

    }
}
