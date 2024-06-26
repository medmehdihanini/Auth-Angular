import {Component, OnInit} from '@angular/core';
import {ServService} from "../../_Services/Serv/serv.service";
import {Services} from "../../_Models/services";

@Component({
  selector: 'app-affichage-serv',
  templateUrl: './affichage-serv.component.html',
  styleUrls: ['./affichage-serv.component.css']
})
export class AffichageServComponent  implements OnInit {
  serivices!: Services[];
  constructor(private Service: ServService) {
  }

  ngOnInit(): void {
      this.getall();
  }

   getall() {
return this.Service.GetAll().subscribe(data => {
    this.serivices = data;
    console.log("data", this.serivices);
});
}


  deleteServ(id: number) {
    this.Service.delte(id).subscribe(data => {
      this.getall();
    });

  }
}

