import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ServService } from "../../_Services/Serv/serv.service";
import { Services } from "../../_Models/services";
import Swal from "sweetalert2";
import { Categorie } from "../../_Models/categorie";
import { CategorieService } from "../../_Services/Cate/categorie.service";

@Component({
  selector: 'app-updateserv',
  templateUrl: './updateserv.component.html',
  styleUrls: ['./updateserv.component.css']
})
export class UpdateservComponent implements OnInit {
  services!: Services;
  categories!: Categorie[];

  constructor(
    private service: ServService,
    private router: Router,
    private route: ActivatedRoute,
    private categoriesService: CategorieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getServ(params['id']);
      this.getCategories();
    });
  }

  getServ(id: number) {
    this.service.getone(id.toString()).subscribe(data => {
      if (!data.categorie) {
        data.categorie = { id: 0, categoriename: '' };
      }
      this.services = data;
    });
  }

  getCategories() {
    this.categoriesService.GetAll().subscribe(data => {
      this.categories = data;
    });
  }

  update() {
    this.service.update(this.services).subscribe(() => {
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
