import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  signIn(email:any, password:any){
    const data = {
      email, password,
    }
    return this.http.post(`${this.URL}/api/signin`, data);
  }
}
