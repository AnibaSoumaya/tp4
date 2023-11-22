import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChaussuresComponent } from './chaussures/chaussures.component';
import { AddChaussureComponent } from './add-chaussure/add-chaussure.component';
import { UpdateChaussureComponent } from './update-chaussure/update-chaussure.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { chaussureGuard } from './chaussure.guard';



const routes: Routes = [
  {path: "chaussures", component : ChaussuresComponent},
  {path : "add-chaussure", component : AddChaussureComponent, canActivate:[chaussureGuard]},
  {path: "", redirectTo: "chaussures", pathMatch: "full" },
  {path: "updateChaussure/:id",  component: UpdateChaussureComponent},
  {path:  'login', component: LoginComponent},
  { path: 'app-forbidden', component: ForbiddenComponent },


  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
