import { Component } from '@angular/core';
import { chaussure } from '../app.module';

import { ActivatedRoute, Router } from '@angular/router';
import { ChaussuresService } from '../service/chaussures.service';

@Component({
  selector: 'app-add-chaussure',
  templateUrl: './add-chaussure.component.html',
  styleUrls: ['./add-chaussure.component.css']
})
export class AddChaussureComponent {
  newChaussure = new chaussure(); 
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,  
              private ChaussureService: ChaussuresService){} 
  addChaussure()
  { 
    //console.log(this.newChaussure); 
    this.ChaussureService.ajouterChaussure(this.newChaussure);
    this.router.navigate(['chaussures']);
    let conf = confirm("Ajout avec succes!"); 

  }

}
