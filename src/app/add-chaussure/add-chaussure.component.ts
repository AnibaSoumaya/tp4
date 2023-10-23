import { Component } from '@angular/core';
import { chaussure } from '../app.module';
import { ChaussureService } from '../chaussure.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-chaussure',
  templateUrl: './add-chaussure.component.html',
  styleUrls: ['./add-chaussure.component.css']
})
export class AddChaussureComponent {
  newChaussure = new chaussure(); 
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,  
              private ChaussureService: ChaussureService){} 
  addChaussure()
  { 
    //console.log(this.newChaussure); 
    this.ChaussureService.ajouterChaussure(this.newChaussure);
    this.router.navigate(['chaussures']);
    let conf = confirm("Ajout avec succes!"); 

  }

}
