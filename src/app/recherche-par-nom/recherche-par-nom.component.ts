import { Component, OnInit } from '@angular/core';
import { chaussure } from '../model/chaussure';
import { ChaussuresService } from '../service/chaussures.service';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrls: ['./recherche-par-nom.component.css']
})
export class RechercheParNomComponent implements OnInit{

  chaussures!: chaussure[] ;
  nomChaussure! : String;
  allChaussures! :chaussure[];
  searchTerm!: string ;


  constructor(private ChaussureService: ChaussuresService) { }

  ngOnInit(): void {
    
    
  }




  rechercherChauss() {
    console.log('Nom sélectionné :', this.nomChaussure);
  
    this.ChaussureService.rechercherParNom(this.nomChaussure)
      .subscribe(
        (prods: chaussure[]) => {
          console.log('Recherche réussie. Résultats :', prods);
          this.chaussures = prods;
        },
        error => {
          console.error('Une erreur s\'est produite lors de la recherche par lieu :', error);
        }
      );
  }


}
