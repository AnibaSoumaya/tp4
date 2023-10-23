import { Injectable } from '@angular/core';
import { chaussure } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class ChaussureService {

  chaussures : chaussure[]; //un tableau de chaînes de caractères 
  chaussure! :chaussure;
  constructor() 
  { 
    this.chaussures = 
    [ 
      {idChaussure : 1,  nomChaussure : "Addidas", prixChaussure: 300.600 , pointureChaussure: 38,couleurChaussure: "Blanc"}, 
      {idChaussure : 2,  nomChaussure : "Nike", prixChaussure : 450 , pointureChaussure: 39, couleurChaussure:"Noir"}, 
      {idChaussure : 3,  nomChaussure :"Puma", prixChaussure : 250.999,pointureChaussure: 37, couleurChaussure: "Rouge"},
      
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

   
}
