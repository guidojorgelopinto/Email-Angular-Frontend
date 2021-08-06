import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent} from 'rxjs';
import { MessageI } from '../models/message.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  controls: any;

  url: string = 'http://localhost:3000/api/';


  constructor(private http: HttpClient) { }

  getAllMessages(): Observable<MessageI[]>{
    let direccion =this.url + "posts" ;

    return this.http.get<MessageI[]>(direccion);

  }

}
