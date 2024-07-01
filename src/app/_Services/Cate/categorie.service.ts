import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Categorie} from "../../_Models/categorie";
import {Observable} from "rxjs";
import {TokenService} from "../Token/token.service";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  ApiUrl = 'http://localhost:6060/categ/';

  constructor(private http: HttpClient, private tokenService: TokenService) {
  }
token = this.tokenService.token;


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  }

  addCategroie(cat: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.ApiUrl + "add", cat, this.httpOptions);
  }


  GetAll():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.ApiUrl + 'getAll',this.httpOptions);

  }
  delete(id:Number):Observable<Categorie[]> {
    return this.http.delete<Categorie[]>(this.ApiUrl + 'delete/' + id,this.httpOptions);
  }

  update(categorie :Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(this.ApiUrl + 'Update', categorie, this.httpOptions);
  }



  getcat(idString: string): Observable<Categorie> {
    let id = parseInt(idString, 10);
    return this.http.get<Categorie>(this.ApiUrl + 'get/' + id,this.httpOptions);
  }
}
