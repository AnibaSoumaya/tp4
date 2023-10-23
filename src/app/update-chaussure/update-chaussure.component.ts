import { Component } from '@angular/core';
import { chaussure } from '../app.module';
import { ActivatedRoute, Router } from '@angular/router';
import { ChaussureService } from '../chaussure.service';

@Component({
  selector: 'app-update-chaussure',
  templateUrl: './update-chaussure.component.html',
  styleUrls: ['./update-chaussure.component.css']
})
export class UpdateChaussureComponent {
  currentChaussure  = new chaussure(); 
   
  constructor(private activatedRoute: ActivatedRoute, 
              private router :Router,
              private ChaussureService: ChaussureService) { } 
 
  ngOnInit() { 
    // console.log(this.route.snapshot.params.id); 
    this.currentChaussure = this.ChaussureService.consulterChaussure(this.activatedRoute.snapshot. params['id']); 
     //console.log(this.currentChaussure);      
  } 
  updateChaussure() { 
      //console.log(this.currentChaussure); 
      this.ChaussureService.updateChaussure(this.currentChaussure);
      this.router.navigate(['chaussures']); 
  } 
}
