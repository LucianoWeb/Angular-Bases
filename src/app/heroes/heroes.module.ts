import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({
  imports: [ // aqui van los modulos que quremos incluir
    CommonModule
  ],
  declarations: [ //lo que queremos encapsular dentro del modulo
    HeroeComponent,
    ListadoComponent 
  ],
  exports: [
    ListadoComponent, //lo que queremos que se vea fuera del modulo 
    HeroeComponent
  ]
})
export class HeroesModule { }
