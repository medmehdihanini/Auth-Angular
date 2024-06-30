import { Component } from '@angular/core';
import {RegistrationRequest} from "../../OpenApiGenerated/models/registration-request";
import {AuthentificationControllerService} from "../../OpenApiGenerated/services/authentification-controller.service";
import {Router} from "@angular/router";
import {TokenService} from "../../_Services/Token/token.service";

@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {

constructor(
  private router: Router,
  private authService: AuthentificationControllerService,
  private tokenService: TokenService
) {
}

  registryRequest:RegistrationRequest= {email: '', password: '', firstName: '', lastName: ''}
  errorMsg: Array<string> = [];

  Registre() {
    this.errorMsg = [];
    this.authService.registre_1({
        body: this.registryRequest
    }).subscribe(
      {
        next:()=>{
            this.router.navigate(['activated-Account'])
        },
        error: (err) => {
          console.log('Error response:', err);
          if (err.error instanceof Blob) {
            const reader = new FileReader();
            reader.onload = (e: any) => {
              const errorObject = JSON.parse(e.target.result);
              if (errorObject.validationErrors) {
                this.errorMsg = errorObject.validationErrors;
              }
            };
            reader.readAsText(err.error);
          }
        }
      }
    )

  }
}
