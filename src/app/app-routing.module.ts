import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NavbarComponent} from "./navbar/navbar.component";
import {AddComponent} from "./Cat/add/add.component";
import {UpdateComponent} from "./Cat/update/update.component";
import {AffichageComponent} from "./Cat/affichage.component";
import {AffichageServComponent} from "./Serv/affichage-serv/affichage-serv.component";
import {AddServComponent} from "./Serv/add-serv/add-serv.component";
import {UpdateservComponent} from "./Serv/updateserv/updateserv.component";
import {RegistreComponent} from "./user/registre/registre.component";
import {LoginComponent} from "./user/login/login.component";
import {ActivateAccountComponent} from "./user/activate-account/activate-account.component";

const routes: Routes = [
  {
    path: 'categ', component: AffichageComponent
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
  },

  {
    path: 'registre', component: RegistreComponent
  },
  {
    path: 'activated-Account', component: ActivateAccountComponent
  },
  {
    path: '', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
