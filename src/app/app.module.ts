import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChaussuresComponent } from './chaussures/chaussures.component';
import { AddChaussureComponent } from './add-chaussure/add-chaussure.component';
import { FormsModule } from '@angular/forms';
import { UpdateChaussureComponent } from './update-chaussure/update-chaussure.component';

@NgModule({
  declarations: [
    AppComponent,
    ChaussuresComponent,
    AddChaussureComponent,
    UpdateChaussureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


export class chaussure { 
  idChaussure? : number; 
  nomChaussure? : string; 
  prixChaussure? : number;
  pointureChaussure? :number;
  couleurChaussure? :string; 
  } 