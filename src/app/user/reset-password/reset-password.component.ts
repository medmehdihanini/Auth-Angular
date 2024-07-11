import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ResetPasswordService} from "../../_Services/Password/reset-password.service";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  token: string = '';
  newPassword: string = '';
  errorMsg: Array<string> = [];


  constructor(private forgotPasswordService: ResetPasswordService, private route: ActivatedRoute,private router:Router) {
    this.token = this.route.snapshot.queryParamMap.get('token') || '';
  }

  onResetPassword() {
    this.forgotPasswordService.resetPassword(this.token, this.newPassword).subscribe({
      next: () => {
        this.router.navigate(['']);

      },
      error: (err) => {
        console.error('Error resetting password', err);
      }
    });
  }
}
