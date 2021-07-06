import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:any

  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  singIn(){
    return this.http.post(`${this.URL}/user/singin`, this.user);
  }
}
