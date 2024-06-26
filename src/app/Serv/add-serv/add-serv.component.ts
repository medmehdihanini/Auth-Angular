import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ServService} from "../../_Services/Serv/serv.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";
import {CategorieService} from "../../_Services/Cate/categorie.service";
import {Categorie} from "../../_Models/categorie";

@Component({
  selector: 'app-add-serv',
  templateUrl: './add-serv.component.html',
  styleUrls: ['./add-serv.component.css']
})
export class AddServComponent implements OnInit {
  constructor(private Service: ServService, private r: Router, private categoriesService: CategorieService) {
  }

  ngOnInit(): void {
    this.getcate();
    }
  categories!: Categorie[]

  AddServ(formserv: NgForm) {
    console.log('formulaire', formserv.value);
    this.Service.addserv(formserv.value).subscribe(data => {
      console.log('data', data);
      console.log("edha formualire ",formserv.value);
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: 'success',
        title: 'Services added successfully'
      }).then(() => {
        this.r.navigate(['/serveice']);
      });
    }, error => {
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: 'error',
        title: 'There was an error adding the Services'
      });
    });

  }

  getcate() {
    return this.categoriesService.GetAll().subscribe(data => {
      this.categories = data;
      console.log("hhhh",this.categories);
    });
  }


}
