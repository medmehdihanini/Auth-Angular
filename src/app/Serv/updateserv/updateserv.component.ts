import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ServService} from "../../_Services/Serv/serv.service";
import {Services} from "../../_Models/services";
import Swal from "sweetalert2";

@Component({
  selector: 'app-updateserv',
  templateUrl: './updateserv.component.html',
  styleUrls: ['./updateserv.component.css']
})
export class UpdateservComponent implements OnInit {
  services!: Services;
    constructor( private Service: ServService, private router: Router, private r: ActivatedRoute) {
    }

  ngOnInit(): void {
    this.r.params.subscribe(params => {
      this.getServ(params['id']);
    });
  }

   getServ(param: number) {
    this.Service.getone(param.toString()).subscribe(data => {
      this.services = data;
      console.log('data', this.services);
    });

  }

  update() {
    this.Service.update(this.services).subscribe(data => {
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
        title: 'Service updated successfully'
      }).then(() => {
        this.router.navigate(['/serveice']);
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
        title: 'There was an error updating the Services'
      });
    });
  }
}
