import { Injectable } from '@angular/core';
import {User} from "../../OpenApiGenerated/models/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Services} from "../../_Models/services";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
    ApiUrl = 'http://localhost:6060/auth/user';
  constructor(private http: HttpClient) {
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  }

  set token(value: string) {
     localStorage.setItem('token', value);

 }


    get token(): string  {
        return localStorage.getItem('token') as string ;
    }

 set Role(value: string) {
     localStorage.setItem('Role', value);
 }

 get Role(): string {
     return localStorage.getItem('Role') as string;
 }

    logout() {
        localStorage.clear()
    }

      isLoggedIn() {
        return !!this.token;    }



  getUserInfo():Observable<User> {
    return this.http.get<User>(`${this.ApiUrl}`, this.httpOptions);
  }
}
