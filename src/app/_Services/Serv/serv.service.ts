import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Services} from "../../_Models/services";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServService {
  ApiUrl = 'http://localhost:6060/service/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
  }



  addCategroie(serv: Services): Observable<Services> {
    return this.http.post<Services>(this.ApiUrl + "add", serv, this.httpOptions);
  }


  GetAll():Observable<Services[]>{
    return this.http.get<Services[]>(this.ApiUrl + 'All');

  }
  deleteetudiant(id:Number):Observable<Services[]> {
    return this.http.delete<Services[]>(this.ApiUrl + 'delete/' + id);
  }

  updateEtudiant(serv :Services): Observable<Services> {
    return this.http.put<Services>(this.ApiUrl + 'Update', serv, this.httpOptions);
  }



  getEtudiant(idString: string): Observable<Services> {
    let id = parseInt(idString, 10);
    return this.http.get<Services>(this.ApiUrl + 'get/' + id);
  }
}
