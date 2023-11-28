import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChaussuresComponent } from './chaussures/chaussures.component';
import { AddChaussureComponent } from './add-chaussure/add-chaussure.component';
import { FormsModule } from '@angular/forms';
import { UpdateChaussureComponent } from './update-chaussure/update-chaussure.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { RechercheParLieuComponent } from './recherche-par-lieu/recherche-par-lieu.component';





@NgModule({
  declarations: [
    AppComponent,
    ChaussuresComponent,
    AddChaussureComponent,
    UpdateChaussureComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParLieuComponent,

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



