import { Injectable } from '@angular/core';
import { LieuCreationChaussure } from '../model/LieuCreationChaussure';
import { chaussure } from '../model/chaussure';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChaussuresService {

  chaussures : chaussure[]; //un tableau de chaînes de caractères 
  chaussure! :chaussure;
  lieu! : LieuCreationChaussure[];
  constructor() 
  { 
    this.lieu = [
      {pays : "france" , codeBar:123 },
      {pays : "États-Unis" , codeBar:321 }
    ]
    this.chaussures = 
    [ 
      {idChaussure : 1,  nomChaussure : "Addidas", prixChaussure: 300.600 , pointureChaussure: 38,couleurChaussure: "Blanc",
       lieuC : {pays : "france" , codeBar:123 }}, 
      {idChaussure : 2,  nomChaussure : "Nike", prixChaussure : 450 , pointureChaussure: 39, couleurChaussure:"Noir" , 
      lieuC : {pays : "france" , codeBar:123 }}, 
      {idChaussure : 3,  nomChaussure :"Puma", prixChaussure : 250.999,pointureChaussure: 37, couleurChaussure: "Rouge" ,
       lieuC : {pays : "États-Unis" , codeBar:321 }},
      
    ];  
  } 
  listeChaussures() :chaussure[]
  {
    return this.chaussures; 
  } 

  ajouterChaussure( chauss: chaussure)
  { 
    this.chaussures.push(chauss); 
  
  }

  listelieu(): Observable<LieuCreationChaussure[]> {
    return of(this.lieu);
  }

  consulterlieu( codeBar: number)
  {
    return this.lieu.find(lieu => lieu.codeBar == codeBar)!;
  }

  supprimerChaussure( chauss: chaussure){ 
    //supprimer le produit chauss du tableau chaussures  
     const index = this.chaussures.indexOf(chauss, 0); 
     if (index > -1) { 
       this.chaussures.splice(index, 1); 
     } 
     //ou Bien 
     /*  this.chaussures.forEach((cur, index) => { 
        if(prod.idPChaussure === cur.idChaussure) { 
              this.chaussures.splice(index, 1);   
           } 
     }); */ 
   } 
   consulterChaussure(id:number): chaussure{     
    this.chaussure =  this.chaussures.find(c => c.idChaussure== id)!; 
    return this.chaussure; 
    }
    updateChaussure(c:chaussure) 
    { 
     // console.log(c); 
      this.supprimerChaussure(c); 
      this.ajouterChaussure(c); 
      this.trierChaussure(); 
    }
    trierChaussure(){ 
      this.chaussures = this.chaussures.sort((n1, n2) => {
        const idChaussure1 = n1.idChaussure ?? 0; // Utilisez 0 comme valeur par défaut si idProduit est undefined
        const idChaussure2 = n2.idChaussure ?? 0;
        
        if (idChaussure1 > idChaussure2) {
          return 1;
        }
        if (idChaussure1 < idChaussure2) {
          return -1;
        }
        return 0;
      });
   
    } 

    rechercherParLieu(pays: String): Observable<chaussure[]> {
      console.log('Lieu de recherche :', pays);
      // Filtrer les chaussures par pays
      const chaussuresFiltrees = this.chaussures.filter(chaussure => chaussure.lieuC.pays === pays);
    
      console.log('Chaussures filtrées :', chaussuresFiltrees);
      // Retourner un Observable de la liste filtrée
      return of(chaussuresFiltrees);
    }

   
}
