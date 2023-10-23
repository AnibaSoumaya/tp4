import { Component } from '@angular/core';
import { chaussure } from '../app.module';
import { ChaussureService } from '../chaussure.service';

@Component({
  selector: 'app-chaussures',
  templateUrl: './chaussures.component.html',
  styleUrls: ['./chaussures.component.css']
})
export class ChaussuresComponent {
  chaussures : chaussure[]; //un tableau de chaînes de caractères 

  constructor(private ChaussureService: ChaussureService) 
  { 
    this.chaussures = ChaussureService.listeChaussures(); 
  } 
  supprimerChaussure(c: chaussure) 
  { 
    //console.log(c); 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) 
      this.ChaussureService.supprimerChaussure(c);
  } 

}
