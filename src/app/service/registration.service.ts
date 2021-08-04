import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private URL = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  signUp(email:any, password:any){
    const data = {
      email, password
    }
    return this.http.post(`${this.URL}/signup`, data);
  }

}
