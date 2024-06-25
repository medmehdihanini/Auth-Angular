import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Categorie} from "../../_Models/categorie";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  ApiUrl = 'http://localhost:6060/categ/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) {
  }



  addCategroie(cat: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.ApiUrl + "add", cat, this.httpOptions);
  }


  GetAll():Observable<Categorie[]>{
    return this.http.get<Categorie[]>(this.ApiUrl + 'getAll');

  }
  delete(id:Number):Observable<Categorie[]> {
    return this.http.delete<Categorie[]>(this.ApiUrl + 'delete/' + id);
  }

  update(categorie :Categorie): Observable<Categorie> {
    return this.http.put<Categorie>(this.ApiUrl + 'Update', categorie, this.httpOptions);
  }



  getcat(idString: string): Observable<Categorie> {
    let id = parseInt(idString, 10);
    return this.http.get<Categorie>(this.ApiUrl + 'get/' + id);
  }
}
