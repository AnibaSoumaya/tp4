import { Component } from '@angular/core';

import { ChaussuresService } from '../service/chaussures.service';
import { chaussure } from '../model/chaussure';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-chaussures',
  templateUrl: './chaussures.component.html',
  styleUrls: ['./chaussures.component.css']
})
export class ChaussuresComponent {
  chaussures : chaussure[]; //un tableau de chaînes de caractères 
  constructor(private ChaussureService: ChaussuresService,
              public authService: AuthService) 
  { 
    this.chaussures = ChaussureService.listeChaussures(); 
  } 
  ngOnit(){
    
  }
  supprimerChaussure(c: chaussure) 
  { 
    //console.log(c); 
    let conf = confirm("Etes-vous sûr ?"); 
    if (conf) 
      this.ChaussureService.supprimerChaussure(c);
  } 

}
