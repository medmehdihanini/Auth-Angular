import {Component, OnInit} from '@angular/core';
import {TokenService} from "../_Services/Token/token.service";
import {Router} from "@angular/router";
import {User} from "../OpenApiGenerated/models/user";
import {Observable} from "rxjs";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private tokenService: TokenService, private router: Router) {}

  User?: User;
  isLoggin = false;

  logout() {
    this.tokenService.logout();
    this.isLoggin = false;
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.isLoggin = this.tokenService.isLoggedIn();
    this.tokenService.getUserInfo().subscribe((data) => {
      this.User = data;
      if (this.User.roles && this.User.roles.length > 0) {
        console.log(this.User.roles[0].name);
        this.tokenService.Role = this.User.roles[0].name as string;
      console.log(this.tokenService.Role);
      } else {
        console.log('No roles available for the user');
      }
    });
  }

}
