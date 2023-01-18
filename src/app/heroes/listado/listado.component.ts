import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ["Spiderman", "Superman", "Hulk", "vegeta", "goku"];
  heroeBorrado : string = ""
  borrarHeroe() {
  this.heroeBorrado =  this.heroes.pop() || "";
    
  }
}
