import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_Services/User/user.service";
import {UsersInfo} from "../../_Models/Users.info";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  constructor(private Userservice:UserService) {
  }
  AllUsersInfo!:UsersInfo[]
  ngOnInit(): void {

    this.Userservice.getUsersInfo().subscribe((data) => {

      this.AllUsersInfo=data;
      console.log(" al user ", data)
    });

  }

}
