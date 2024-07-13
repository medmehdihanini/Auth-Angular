import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {TokenService} from "../Token/token.service";
import {Observable} from "rxjs";
import {UsersInfo} from "../../_Models/Users.info";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ApiUrl = 'http://localhost:6060/user/';
  token = this.TokenService.token;

  constructor(
    private http: HttpClient,
    private TokenService: TokenService
  ) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.token}`
    })
  }

  getUsersInfo(): Observable<UsersInfo[]> {
    return this.http.get<UsersInfo[]>(`${this.ApiUrl}All`, this.httpOptions);
  }
}
