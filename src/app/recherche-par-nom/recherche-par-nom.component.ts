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
  searchTerm!: string ;


  constructor(private ChaussureService: ChaussuresService) { }

  ngOnInit(): void {
    this.chaussures = this.ChaussureService.listeChaussures();
    console.log(this.chaussures);
    
  }




 


}
