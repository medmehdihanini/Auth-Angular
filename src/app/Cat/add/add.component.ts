import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategorieService } from '../../_Services/Cate/categorie.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private categoriesService: CategorieService, private r: Router) { }

  AddCategorie(formcat: NgForm) {
    console.log('formulaire', formcat.value);
    this.categoriesService.addCategroie(formcat.value).subscribe(data => {
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
        title: 'Category added successfully'
      }).then(() => {
        this.r.navigate(['']);
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
        title: 'There was an error adding the category'
      });
    });
  }
}
