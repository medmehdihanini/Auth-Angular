import {Component, OnInit} from '@angular/core';
import {TokenService} from "../_Services/Token/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor(private tokenService: TokenService,private router: Router) {


  }
  isLoggin= false;

  logout() {
      this.tokenService.logout();
      this.isLoggin = false;
      this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.isLoggin = this.tokenService.isLoggedIn();
  }
}
