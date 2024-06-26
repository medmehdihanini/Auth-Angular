import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {ServService} from "../../_Services/Serv/serv.service";
import Swal from "sweetalert2";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-serv',
  templateUrl: './add-serv.component.html',
  styleUrls: ['./add-serv.component.css']
})
export class AddServComponent {
  constructor(private Service: ServService, private r: Router) {
  }

  AddServ(formserv: NgForm) {
    console.log('formulaire', formserv.value);
    this.Service.addserv(formserv.value).subscribe(data => {
      console.log('data', data);
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
}
