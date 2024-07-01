import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

 set token(value: string) {
     localStorage.setItem('token', value);
 }


    get token(): string  {
        return localStorage.getItem('token') as string;
    }




    logout() {
        this.token = null as unknown as string;
    }

    isLoggedIn() {
        return !!this.token;
    }
}
