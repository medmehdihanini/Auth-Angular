import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AffichageComponent} from "./Cat/affichage.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {AddComponent} from "./Cat/add/add.component";
import {UpdateComponent} from "./Cat/update/update.component";

const routes: Routes = [
  {
    path: '', component: AffichageComponent
  },
    {
        path: 'add', component: AddComponent
    },
  {
    path: 'update/:id', component: UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
