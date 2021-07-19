import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/user';

  constructor(private http: HttpClient) { }

  singUp(userName:any, password:any){
    const data = {
      userName, password
    }
    return this.http.post(`${this.URL}/singin`, data);
  }
}
