import {Component, OnInit} from '@angular/core';
import {TokenService} from "../_Services/Token/token.service";
import {Router} from "@angular/router";
import {User} from "../OpenApiGenerated/models/user";
import {Observable} from "rxjs";
import {UserInfo} from "../_Models/UserInfo";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private tokenService: TokenService, private router: Router) {}

  User?: UserInfo;
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
      console.log("data"  ,data.role)
    });
  }

}
