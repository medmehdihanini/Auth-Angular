import { Component } from '@angular/core';
import { AuthentificationRequest } from "../../OpenApiGenerated/models/authentification-request";
import { Router } from "@angular/router";
import { AuthentificationControllerService } from "../../OpenApiGenerated/services/authentification-controller.service";

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
  ) { }

  loginfn() {
    this.errorMsg = [];
    this.authService.authentification({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        // todo: save the token
        this.router.navigate(['serveice']);
      },
      error: (err) => {
        console.log('Error response:', err);
        if (err.error instanceof Blob) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            const errorObject = JSON.parse(e.target.result);
            console.log('Parsed error object:', errorObject);
            if (errorObject.validationErrors) {
              this.errorMsg = errorObject.validationErrors;
            } else if (errorObject.message) {
              this.errorMsg.push(errorObject.message);
            } else {
              this.errorMsg.push('An unexpected error occurred.');
            }
          };
          reader.readAsText(err.error);
        } else {
          if (err.error && err.error.validationErrors) {
            this.errorMsg = err.error.validationErrors;
          } else if (err.error && err.error.message) {
            this.errorMsg.push(err.error.message);
          } else {
            this.errorMsg.push('An unexpected error occurred.');
          }
        }
      }
    });
  }
}
