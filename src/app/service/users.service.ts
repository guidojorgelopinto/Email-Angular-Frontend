import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserI} from "@app/models/users.interface";
import { BehaviorSubject, Observable, pipe, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Subject } from 'rxjs';

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})


export class UsersService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkToken();
  }


  // inicio sesion

  get isLoggedIn(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  private URL = 'http://localhost:3000';

    signIn(authData: UserI): Observable <any> {
    return this.http
    .post<UserI>(`${this.URL}/api/signin`, authData)
    .pipe(
      map((res: UserI) => {
        this.saveToken(res.token);
        this.loggedIn.next(true);
        return res;
      }),
      // catchError((err) => this.handleError(err))
    );
  }









  // signOut(): void {
  //   localStorage.removeItem('token');
  //   this.loggedIn.next(false);
  // }



  // handleError(err: any): any {
  //   throw new Error("Method not implemented.");
  //   if (err) {
  //     const errorMessage = `Error: code ${err.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(errorMessage);
  // }


  private checkToken(): void {

    const serializableState: string | any = localStorage.getItem('globalState');
    return serializableState !== null || serializableState === undefined ? JSON.parse(serializableState) : undefined;
  }

  private saveToken(token: string): void {
    localStorage.setItem("token", token);
  }

}

