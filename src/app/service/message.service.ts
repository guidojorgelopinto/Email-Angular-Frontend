import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostsI } from '../models/posts.interface';
import { BehaviorSubject, Observable, pipe, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAll(): Observable<PostsI[]>{
    return this.http.get<PostsI[]>(`${this.URL}/api/posts/`);
  }

  //Enviar mensaje nuevo

  sendMessage(authData: PostsI) {
    return this.http
    .post<PostsI>(`${this.URL}/api/posts/:id/`, authData)
    .subscribe((res: PostsI) => {
      console.log(res);
      // this.saveToken(res.token);
      // this.loggedIn.next(true);
      // return res;
    });
      // catchError((err) => this.handleError(err))
  }

  private checkToken(): void {

    const serializableState: string | any = localStorage.getItem('globalState');
    return serializableState !== null || serializableState === undefined ? JSON.parse(serializableState) : undefined;
  }

  private saveToken(token: string): void {
    localStorage.setItem("token", token);
  }

  //Traer Mensajes por token



  }
