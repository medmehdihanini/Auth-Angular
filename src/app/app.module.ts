import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {AffichageComponent} from "./Cat/affichage.component";
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './Cat/add/add.component';
import {FormsModule} from "@angular/forms";
import { UpdateComponent } from './Cat/update/update.component';
import { AffichageServComponent } from './Serv/affichage-serv/affichage-serv.component';
import { AddServComponent } from './Serv/add-serv/add-serv.component';
import { UpdateservComponent } from './Serv/updateserv/updateserv.component';
import { RegistreComponent } from './user/registre/registre.component';
import { LoginComponent } from './user/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    AffichageComponent,
    NavbarComponent,
    AddComponent,
    UpdateComponent,
    AffichageServComponent,
    AddServComponent,
    UpdateservComponent,
    RegistreComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
