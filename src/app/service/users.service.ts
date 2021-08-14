import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { UserI} from "@app/models/users.interface";
import { BehaviorSubject, Observable, pipe, throwError } from "rxjs";
import { map } from "rxjs/operators";
import { JwtHelperService } from "@auth0/angular-jwt";

const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})


export class UsersService {

  [x: string]: any;
  public loggedIn = new BehaviorSubject<boolean>(false);

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
      .post<UserI>(`${this.URL}/api/signin/`, authData)
      .pipe(
        map((res: UserI) => {
          this.saveToken(res.token);
          this.loggedIn.next(true);
          return res;
        }),
        // catchError((err) => this.handleError(err))
      );
    }

  // crear usuario

    signUp(authData: UserI) {
      this.http.post<UserI>(`${this.URL}/api/signup`, authData)
      .subscribe((res: UserI) => {
        console.log(res);
        this.saveToken(res.token);
        this.loggedIn.next(true);
        // return res;
      });
    }

    //probar y guardar token

    private checkToken(): void {

      const serializableState: string | any = localStorage.getItem('globalState');
      return serializableState !== null || serializableState === undefined ? JSON.parse(serializableState) : undefined;
    }

    private saveToken(token: string): void {
      localStorage.setItem("token", token);
    }

    public getToken() {
      return localStorage.getItem('token');
    }

    logout(): void {
      localStorage.removeItem('token');
      this.loggedIn.next(false);
    }
}

