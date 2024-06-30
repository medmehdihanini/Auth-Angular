import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationControllerService} from "../../OpenApiGenerated/services/authentification-controller.service";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent {

  constructor(
    private router: Router,
    private authService: AuthentificationControllerService,

  ) {
  }

  message: string = '';
  isOkay: boolean = true;
  submitted: boolean = false;

  redirectToLogin() {
    this.router.navigate([''])

  }

  onCodeCompleted(token: any) {

    this.confirmAccount(token)

  }

  private confirmAccount(token: any) {
    this.authService.confiormAccount({
      token: token
    }).subscribe({
      next:()=>{
          this.message = 'Your account has been activated.\n You can now login.';
          this.submitted = true
      },
      error: (err) => {
         this.message = 'your Token Has been expired or Invalid .\n Please try again.';
         this.submitted = true
        this.isOkay = false;
      }
    })
  }
}
