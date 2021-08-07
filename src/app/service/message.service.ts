import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent} from 'rxjs';
import { PostsI } from '../models/posts.interface';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private url: string = 'http://localhost:3000/api/posts/';

  constructor(private http: HttpClient) { }

  getAll(): Observable<PostsI[]>{
    return this.http.get<PostsI[]>(this.url);
  }
}
