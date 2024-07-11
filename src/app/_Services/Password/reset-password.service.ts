import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Categorie} from "../../_Models/categorie";

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {
  apiUrl="http://localhost:6060/password"

  constructor(private http: HttpClient,
  ) {}




  forgotPassword(email: string): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().set('email', email)
    };

    return this.http.post<void>(`${this.apiUrl}/forgot`, null, httpOptions);
  }

  resetPassword(token: string, newPassword: string): Observable<void> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: new HttpParams().set('token', token).set('newPassword', newPassword)
    };

    return this.http.post<void>(`${this.apiUrl}/reset`, null, httpOptions);
  }




}
