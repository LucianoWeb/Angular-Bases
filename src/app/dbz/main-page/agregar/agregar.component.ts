import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../main-page.component';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent {
  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0,
  };
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  constructor(private dbzService: DbzService){}
  agregar() {
    if (this.nuevo.nombre.trim().length === 0) {
      return; // si el nuevo personaje esta vacio, se sale del metodo, no hace nada. el .trim() borra los espacios en blanco
    }
   // this.onNuevoPersonaje.emit(this.nuevo);
    // this.personajes.push(this.nuevo) // le decimos que queremos agregar el nuevo personaje al arreglo de personajes. con la funcion agregar() y el ngmodel
    this.dbzService.agregarPersonaje(this.nuevo);
    this.nuevo = {
      // esto es para refrescar los inputs una vez se hayan agregado los personajes, vuelven a estar vacios
      nombre: '',
      poder: 0,
    };
  }
}
