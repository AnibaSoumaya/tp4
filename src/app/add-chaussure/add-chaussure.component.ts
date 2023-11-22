import { Component } from '@angular/core';


import { ActivatedRoute, Router } from '@angular/router';
import { ChaussuresService } from '../service/chaussures.service';
import { chaussure } from '../model/chaussure';
import { LieuCreationChaussure } from '../model/LieuCreationChaussure';

@Component({
  selector: 'app-add-chaussure',
  templateUrl: './add-chaussure.component.html',
  styleUrls: ['./add-chaussure.component.css']
})
export class AddChaussureComponent {
  lieu ! : LieuCreationChaussure[];
  newChaussure = new chaussure(); 
  newLieu! : LieuCreationChaussure;
  newcodeBar ! :number;
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,  
              private ChaussureService: ChaussuresService){} 
  
  ngOnInit() 
  {
    this.lieu = this.ChaussureService.listelieu();
  }

  addChaussure()
  { 
    //console.log(this.newChaussure); 
    this.newLieu =
    this.ChaussureService.consulterlieu(this.newcodeBar);
    this.newChaussure.lieuC = this.newLieu;
    this.ChaussureService.ajouterChaussure(this.newChaussure);
    this.router.navigate(['chaussures']); 

  }

}
