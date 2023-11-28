import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChaussuresService } from '../service/chaussures.service';
import { chaussure } from '../model/chaussure';
import { LieuCreationChaussure } from '../model/LieuCreationChaussure';


@Component({
  selector: 'app-update-chaussure',
  templateUrl: './update-chaussure.component.html',
  styleUrls: ['./update-chaussure.component.css']
})
export class UpdateChaussureComponent {
  currentChaussure  = new chaussure(); 
  lieu ! : LieuCreationChaussure[];
  upcodebar ! : number;


   
  constructor(private activatedRoute: ActivatedRoute, 
              private router :Router,
              private ChaussureService: ChaussuresService) { } 
 
  ngOnInit() { 
    this.ChaussureService.listelieu().subscribe(
      (lieuData: LieuCreationChaussure[]) => {
        this.lieu = lieuData;
      })
    // console.log(this.route.snapshot.params.id); 
    this.currentChaussure = this.ChaussureService.consulterChaussure(this.activatedRoute.snapshot. params['id']);
    this.upcodebar = this.currentChaussure.lieuC.codeBar; 
     //console.log(this.currentChaussure);      
  } 
  updateChaussure() { 
      //console.log(this.currentChaussure); 
      this.currentChaussure.lieuC = this.ChaussureService.consulterlieu(this.upcodebar);
      this.ChaussureService.updateChaussure(this.currentChaussure);
      this.router.navigate(['chaussures']); 
  } 
}
