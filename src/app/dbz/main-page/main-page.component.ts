import { Component} from '@angular/core';
import { DbzService } from '../services/dbz.service';

export interface Personaje {
  nombre:string;
  poder:number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  
  nuevo:Personaje={
    nombre:"",
    poder: 0
  }
   

  constructor(){

  }
  
}
