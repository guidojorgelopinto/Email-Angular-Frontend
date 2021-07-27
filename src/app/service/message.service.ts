import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private URL = 'http://localhost:3000/message';

  constructor(private http: HttpClient) { }

  getMessage(from:any, to:any, date:any, message:any){
    const data = {
      from , to, date, message
    }
    return this.http.post(`${this.URL}/bandeja`, data);
  }
}
