import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserI } from "../models/user.interface";
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
}
