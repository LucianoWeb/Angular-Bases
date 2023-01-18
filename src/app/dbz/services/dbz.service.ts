import { Injectable } from '@angular/core';
import { Personaje } from '../main-page/main-page.component';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    //le ponemos private para evitar que se pueda manipular desde otro componente
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 2000,
    },
  ];
  get personajes(): Personaje[] {
    return [...this._personajes]; //el spread ... separa cada uno de los elementos del array y crea uno nuevo
  }

  constructor() {}
  
  agregarPersonaje(personaje:Personaje){
    this._personajes.push(personaje);
  }
}
