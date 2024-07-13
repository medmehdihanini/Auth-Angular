import {Component, OnInit} from '@angular/core';
import {UserService} from "../../_Services/User/user.service";
import {UsersInfo} from "../../_Models/Users.info";
import {AdminService} from "../../_Services/Admin/admin.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit{

  constructor(private Userservice:UserService,private adminservice:AdminService) {
  }
  AllUsersInfo!:UsersInfo[]
  ngOnInit(): void {
this.getAlluser()

  }




  getAlluser(){
    this.Userservice.getUsersInfo().subscribe((data) => {
      this.AllUsersInfo=data;

    });
  }



  BanUser(email: string) {
    this.adminservice.banAccount(email).subscribe(
      (e) => {
        console.log(e);
        this.getAlluser(); // Rafraîchir la liste des utilisateurs après le bannissement
      },
      (error) => {
        console.log(error);
      }
    );
  }

  UnBanUser(email: string) {
    this.adminservice.unbanAccount(email).subscribe(
      (e) => {
        console.log(e);
        this.getAlluser(); // Rafraîchir la liste des utilisateurs après le débannissement
      },
      (error) => {
        console.log(error);
      }
    );
  }

  DisableAccount(email: string) {
    this.adminservice.disableAccount(email).subscribe(
      (e) => {
        console.log(e);
        this.getAlluser(); // Rafraîchir la liste des utilisateurs après la désactivation du compte
      },
      (error) => {
        console.log(error);
      }
    );
  }

  EnableAccount(email: string) {
    this.adminservice.enableAccount(email).subscribe(
      (e) => {
        console.log(e);
        this.getAlluser(); // Rafraîchir la liste des utilisateurs après l'activation du compte
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
