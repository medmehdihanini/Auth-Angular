import { Component } from '@angular/core';
import { AuthentificationRequest } from "../../OpenApiGenerated/models/authentification-request";
import { Router } from "@angular/router";
import { AuthentificationControllerService } from "../../OpenApiGenerated/services/authentification-controller.service";
import { TokenService } from "../../_Services/Token/token.service";
import { AuthentificationResponse } from "../../OpenApiGenerated/models/authentification-response";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  authRequest: AuthentificationRequest = { email: '', password: '' };
  errorMsg: Array<string> = [];

  constructor(
    private router: Router,
    private authService: AuthentificationControllerService,
    private tokenService: TokenService
  ) { }

  loginfn() {
    this.errorMsg = [];
    this.authService.authentification({
      body: this.authRequest
    }).subscribe({
      next: (res: any) => {
        if (res instanceof Blob && res.type === 'application/json') {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            const TokenObject = JSON.parse(e.target.result);

            if (TokenObject && TokenObject.token) {
              this.tokenService.token = TokenObject.token;
              console.log('Token is set to: ', this.tokenService.token);
              this.router.navigate(['serveice']);
            }
          };
          reader.readAsText(res);
        } else {
          console.log('Unexpected response:', res);
          this.errorMsg.push('An unexpected error occurred.');
        }
      },
      error: (err) => {
        console.log('Error response:', err);
        if (err.error instanceof Blob) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            const errorObject = JSON.parse(e.target.result);
            if (errorObject.validationErrors) {
              this.errorMsg = errorObject.validationErrors;
            } else {
              this.errorMsg.push(errorObject.error);
            }
          };
          reader.readAsText(err.error);
        } else {
          if (err.error && err.error.validationErrors) {
            this.errorMsg = err.error.validationErrors;
          } else if (err.error && err.error.message) {
            this.errorMsg.push(err.error.message);
          } else {
            this.errorMsg.push('Login and / or Password is incorrect');
          }
        }
      }
    });
  }
}
