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
import {AuthentificationGuard} from "./guard/authentification.guard";
import {ForgetPasswordComponent} from "./user/forget-password/forget-password.component";
import {ResetPasswordComponent} from "./user/reset-password/reset-password.component";
import {ResetPasswordService} from "./_Services/Password/reset-password.service";

const routes: Routes = [


  {
    path: 'categ', component: AffichageComponent,canActivate:[AuthentificationGuard]
  },
    {
        path: 'add', component: AddComponent ,canActivate:[AuthentificationGuard]
    },
  {
    path: 'update/:id', component: UpdateComponent,canActivate:[AuthentificationGuard]
  },
  {
    path: 'serveice', component: AffichageServComponent,canActivate:[AuthentificationGuard]
  },
  {
    path: 'serveice/add', component: AddServComponent,canActivate:[AuthentificationGuard]
  },

  {
    path: 'serveice/update/:id', component: UpdateservComponent,canActivate:[AuthentificationGuard]
  },

  {
    path: 'registre', component: RegistreComponent
  },
  {
    path: 'activated-Account', component: ActivateAccountComponent
  },
  {
    path: 'reset-Password', component: ForgetPasswordComponent
  },
  {
    path: 'forget_password', component: ResetPasswordComponent
  },

  {
    path: '', component: LoginComponent
  },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
