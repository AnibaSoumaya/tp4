import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChaussuresComponent } from './chaussures/chaussures.component';
import { AddChaussureComponent } from './add-chaussure/add-chaussure.component';
import { UpdateChaussureComponent } from './update-chaussure/update-chaussure.component';

const routes: Routes = [
  {path: "chaussures", component : ChaussuresComponent},
  {path: "addchaussure", component : AddChaussureComponent},
  {path: "", redirectTo: "chaussures", pathMatch: "full" },
  {path: "updateChaussure/:id",  component: UpdateChaussureComponent} 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
