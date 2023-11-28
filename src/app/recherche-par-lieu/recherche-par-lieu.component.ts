import { Component, OnInit } from '@angular/core';
import { LieuCreationChaussure } from '../model/LieuCreationChaussure';
import { chaussure } from '../model/chaussure';
import { ChaussuresService } from '../service/chaussures.service';


@Component({
  selector: 'app-recherche-par-lieu',
  templateUrl: './recherche-par-lieu.component.html',
  styleUrls: ['./recherche-par-lieu.component.css']
})
export class RechercheParLieuComponent implements OnInit {

  pays! : string;
  lieu!: LieuCreationChaussure[] ;
  chaussures!: chaussure[] ;

  constructor(private ChaussureService: ChaussuresService) { }

  ngOnInit(): void {
    this.ChaussureService.listelieu().subscribe(
      (lieu: LieuCreationChaussure[]) => {
        this.lieu = lieu;
        console.log(lieu);
      });
  }

  onChange() {
    console.log('Lieu sélectionné :', this.pays);
    this.ChaussureService.rechercherParLieu(this.pays)
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
