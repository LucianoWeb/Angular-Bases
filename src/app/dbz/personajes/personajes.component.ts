import { Component, } from '@angular/core';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent  {
  //@Input() personajes: Personaje[] = []; // el input son las props de React, le decimos que va a recibir la propiedad personajes del padre.

  get personajes(){ //llamamos al getter de dbz.service y le pedimos personajes
    return this.dbzService.personajes
  }
  constructor(private dbzService:DbzService){}
}
