import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {AddComponent} from "./Cat/add/add.component";
import {UpdateComponent} from "./Cat/update/update.component";
import {AffichageComponent} from "./Cat/affichage.component";
import {AffichageServComponent} from "./Serv/affichage-serv/affichage-serv.component";
import {AddServComponent} from "./Serv/add-serv/add-serv.component";
import {UpdateservComponent} from "./Serv/updateserv/updateserv.component";

const routes: Routes = [
  {
    path: '', component: AffichageComponent
  },
    {
        path: 'add', component: AddComponent
    },
  {
    path: 'update/:id', component: UpdateComponent
  },
  {
    path: 'serveice', component: AffichageServComponent
  },
  {
    path: 'serveice/add', component: AddServComponent
  },

  {
    path: 'serveice/update/:id', component: UpdateservComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
