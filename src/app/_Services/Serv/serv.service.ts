import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Services } from '../../_Models/services';
import { Observable } from 'rxjs';
import {TokenService} from "../Token/token.service";

@Injectable({
  providedIn: 'root'
})
export class ServService {
  ApiUrl = 'http://localhost:6060/service/';
  token = this.TokenService.token;

  constructor(private http: HttpClient,
  private TokenService: TokenService
  ) {}

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
        })
    }

  addserv(serv: Services): Observable<Services> {
    console.log(this.token);

    return this.http.post<Services>(`${this.ApiUrl}add`, serv, this.httpOptions);
  }

  GetAll(): Observable<Services[]> {

    return this.http.get<Services[]>(`${this.ApiUrl}All`, this.httpOptions);
  }

  delte(id: number): Observable<Services[]> {

    return this.http.delete<Services[]>(`${this.ApiUrl}delete/${id}`, this.httpOptions);
  }

  update(serv: Services): Observable<Services> {

    return this.http.put<Services>(`${this.ApiUrl}Update`, serv, this.httpOptions);
  }

  getone(idString: string): Observable<Services> {
    const id = parseInt(idString, 10);

    return this.http.get<Services>(`${this.ApiUrl}get/${id}`, this.httpOptions);
  }
}
