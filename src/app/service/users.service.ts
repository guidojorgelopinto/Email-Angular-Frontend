import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserI, ResponseI } from "@app/models/user.interface";
import { BehaviorSubject, Observable, pipe, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
    this.checkToken();
  }

  get isLoggedIn(): Observable<boolean>{
    return this.loggedIn.asObservable();
  }

  private URL = 'http://localhost:3000';

  // signIn(email:any, password:any){
  //   const dataIn = {
  //     email, password,
  //   }
  //   return this.http.post(`${this.URL}/api/signin`, dataIn);
  // }


    signIn(authData: UserI): Observable <any> {
    return this.http
    .post<ResponseI>(`${this.URL}/api/signin`, authData)
    .pipe(
      map((res: ResponseI) => {
        this.saveToken(res.token);
        this.loggedIn.next(true);
        return res;
      }),
      // catchError((err) => this.handleError(err))
    );

  }
  // handleError(err: any): any {
  //   throw new Error("Method not implemented.");
  //   if (err) {
  //     const errorMessage = `Error: code ${err.message}`;
  //   }
  //   window.alert(errorMessage);
  //   return throwError(errorMessage);
  // }


  signOut(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
  }

  private checkToken(): void {
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired('userToken');
    // console.log('isExpired->' isExpired);

      isExpired ? this.signOut() : this.loggedIn.next(true);
  }

  private saveToken(token: string): void {
    localStorage.setItem("token", token);
  }

}

