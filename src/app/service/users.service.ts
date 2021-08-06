import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserI } from "../models/user.interface";
// import { Observable } from "rxjs/Observable";
// import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {}

  private URL = 'http://localhost:3000';

  signIn(email:any, password:any){
    const dataIn = {
      email, password,
    }
    return this.http.post(`${this.URL}/api/signin`, dataIn);
  }

  // signUp(user:User): Observable<any>{

  //   return this.http.post(`${this.URL}/api/signUp`, user);
  // }

  // getMessage(from:any, to:any, date:any, message:any){
  //   const data = {
  //     from , to, date, message
  //   }
  //   return this.http.post(`${this.URL}/api/posts`, data);
  // }


  // setToken(token: String) {
  //   this.cookies.set("token", token);
  // }
  // getToken() {
  //   return this.cookies.get("token");
  // }
  // getUser() {
  //   return this.http.get("https://reqres.in/api/users/2");
  // }
  // getUserLogged() {
  //   const token = this.getToken();
  //   // Aquí iría el endpoint para devolver el usuario para un token
  // }
}
