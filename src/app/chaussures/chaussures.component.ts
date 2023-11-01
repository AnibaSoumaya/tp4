import { Component } from '@angular/core';
import { chaussure } from '../app.module';
import { ChaussuresService } from '../service/chaussures.service';


@Component({
  selector: 'app-chaussures',
  templateUrl: './chaussures.component.html',
  styleUrls: ['./chaussures.component.css']
})
export class ChaussuresComponent {
  chaussures : chaussure[]; //un tableau de chaînes de caractères 
test : String ="Ahmed"
  constructor(private ChaussureService: ChaussuresService) 
  { 
    this.chaussures = ChaussureService.listeChaussures(); 
  } 
  ngOnit(){
    this.test
  }
  supprimerChaussure(c: chaussure) 
  { 
    //console.log(c); 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) 
      this.ChaussureService.supprimerChaussure(c);
  } 

}
