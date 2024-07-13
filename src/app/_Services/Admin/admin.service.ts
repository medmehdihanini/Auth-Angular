import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TokenService } from '../Token/token.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private ApiUrl = 'http://localhost:6060/admin/';

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenService.token}`
    });
  }

  enableAccount(email: string): Observable<void> {
    return this.http.post<void>(`${this.ApiUrl}enable-account`, { email }, { headers: this.getHeaders() });
  }

  disableAccount(email: string): Observable<void> {
    return this.http.post<void>(`${this.ApiUrl}disable-account`, { email }, { headers: this.getHeaders() });
  }

  banAccount(email: string): Observable<void> {
    return this.http.post<void>(`${this.ApiUrl}ban-account`, { email }, { headers: this.getHeaders() });
  }

  unbanAccount(email: string): Observable<void> {
    return this.http.post<void>(`${this.ApiUrl}unban-account`, { email }, { headers: this.getHeaders() });
  }
}
