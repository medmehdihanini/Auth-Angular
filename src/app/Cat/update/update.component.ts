import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../../_Services/Cate/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../../_Models/categorie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  constructor(private categorieService: CategorieService, private router: Router, private r: ActivatedRoute) { }

  categorie!: Categorie;

  ngOnInit(): void {
    this.r.params.subscribe(params => {
      this.getcat(params['id']);
    });
  }

  getcat(idcat: number) {
    this.categorieService.getcat(idcat.toString()).subscribe(data => {
      this.categorie = data;
      console.log('data', this.categorie);
    });
  }

  update() {
    this.categorieService.update(this.categorie).subscribe(data => {
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
        title: 'Category updated successfully'
      }).then(() => {
        this.router.navigate(['/categ']);
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
        title: 'There was an error updating the category'
      });
    });
  }
}
