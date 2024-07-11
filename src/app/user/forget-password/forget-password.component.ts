import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {ResetPasswordService} from "../../_Services/Password/reset-password.service";

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {


  constructor(private router: Router,
              private passwordservice:ResetPasswordService,) {
  }

  errorMsg: Array<string> = [];
  email:string='' ;


  resetPassord() {
    this.passwordservice.forgotPassword(this.email).subscribe(
      {
        next:()=>{
console.log("email is sent ")        },
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
              this.errorMsg.push('something wrong');
            }
          }
        }
      }
    )

  }
}

