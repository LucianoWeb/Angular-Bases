import { Component } from '@angular/core';

@Component({
  selector: 'app-contadorcito',
  templateUrl: './contadorcito.component.html'
})
export class ContadorcitoComponent {

  numero: number = 0;
 acumular(valor:number){
  this.numero += valor;
}
}
