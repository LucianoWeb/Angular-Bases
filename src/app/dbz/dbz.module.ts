import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from './personajes/personajes.component';
import { AgregarComponent } from './main-page/agregar/agregar.component';
import { DbzService } from './services/dbz.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, // este modulo es para no tener que poner el e.preventDefault
  ],
  declarations: [MainPageComponent, PersonajesComponent, AgregarComponent],
  exports: [MainPageComponent],
  providers: [DbzService]
})
export class DbzModule {}
