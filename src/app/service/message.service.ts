import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PostsI } from '../models/posts.interface';
import { BehaviorSubject, Observable, pipe, throwError } from "rxjs";
import { UsersService } from '../service/users.service';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class MessageService {
  [x: string]: any;
  private loggedIn = new BehaviorSubject<boolean>(false);

  private URL = 'http://localhost:3000';

  constructor(private http: HttpClient, private users: UsersService) { }

  public bring() {
    const httpOptions = {
    headers: new HttpHeaders({
      Authorization: 'Bearer ' + <string>this.users.getToken()
    })
  };
  return this.http.get<PostsI[]>(`${this.URL}/api/posts`, httpOptions);
  }

   //Enviar mensaje nuevo

  // sendMessage(authData: PostsI) {
  //   return this.http
  //   .post<PostsI>(`${this.URL}/api/posts/:id`, authData)
  //   .pipe(
  //     map((res: PostsI) => {
  //       this.saveToken(res.token);
  //       this.loggedIn.next(true);
  //       return res;
  //     }),

  // );
  // }

  sendMessage(id: any) {
    return this.http
    .post(`${this.URL}/api/posts/${id}`)
}

     //Eliminar mensaje

     delId(id: any) {
      return this.http
      .delete(`${this.URL}/api/posts/${id}`)
  }

  private checkToken(): void {

    const serializableState: string | any = localStorage.getItem('globalState');
    return serializableState !== null || serializableState === undefined ? JSON.parse(serializableState) : undefined;
  }

  private saveToken(token: string): void {
    localStorage.setItem("token", token);
  }


  // getAll(): Observable<any> {
  //   return this.http.get(this.URL);
  // }

  // get(id): Observable<any> {
  //   return this.http.get(`${this.URL}/${id}`);
  // }

  // create(data): Observable<any> {
  //   return this.http.post(this.URL, data);
  // }

  // update(id, data): Observable<any> {
  //   return this.http.put(`${this.URL}/${id}`, data);
  // }

  // findByTitle(title): Observable<any> {
  //   return this.http.get(`${this.URL}?title=${title}`);
  // }
// }

  }

