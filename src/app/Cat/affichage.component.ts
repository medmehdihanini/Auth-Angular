import {Component, OnInit} from '@angular/core';
import {CategorieService} from "./../_Services/Cate/categorie.service";
import {Categorie} from "../_Models/categorie";
import {Observable, Subscription} from "rxjs";

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage/affichage.component.html',
  styleUrls: ['./affichage/affichage.component.css']
})
export class AffichageComponent implements OnInit {


  categories!: Categorie[];
  constructor(private categoriesService: CategorieService) {
  }

  ngOnInit(): void {
    this.getall();
  }

  getall() {
    return this.categoriesService.GetAll().subscribe(data => {
      this.categories = data;
      console.log("hhhh",this.categories);
    });
  }

  deleteCat(id: number) {
    this.categoriesService.delete(id).subscribe(data => {
        console.log("hhhh", data);
        this.getall();
    });
  }
}
