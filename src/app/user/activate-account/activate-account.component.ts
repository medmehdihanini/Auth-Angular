import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthentificationControllerService} from "../../OpenApiGenerated/services/authentification-controller.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthentificationControllerService,

  ) {
  }

  ngOnInit(): void {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-right',
      showConfirmButton: false,
      timer: 7000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    Toast.fire({
      icon: 'success',
      title: 'An email has been sent to your account. Please verify it.'
    });
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
