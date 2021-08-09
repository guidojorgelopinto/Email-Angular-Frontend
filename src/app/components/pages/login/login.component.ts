import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../../service/users.service'
import { map } from 'rxjs/operators';
import { UserI } from '../../../models/user.interface'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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

  ngOnInit(): void {

    const userData = {
      email: "guido@gmail.com",
      password: "123456",
      };

      this.usersService.signIn(userData).subscribe((res) => console.log("Login"));
    }


    // this.form = this.fb.group ({
    //   email: ['', Validators.required],
    //   password: ['', Validators.required],
    // })
    // this.checkLocalStorage();


  // checkLocalStorage() {
  //   if(localStorage.getItem("token")){
  //     this.router.navigate(['login']);
  //   }
  // }

//   signIn() {

//     if(this.form.invalid) {
//       return;
//     }
//     this.usersService.signIn(
//       this.form.controls.UserI.value)
//       // this.form.controls.password.value)
//       .pipe(map(token => this.router.navigate(['bandejaprincipal']))
//     ).subscribe()

// }

signIn(): void{
  const formValue = this.form.value;
  this.usersService.signIn(formValue).subscribe((res) => {
    if (res){
      this.router.navigate(['']);
    }
  });

  }
}












