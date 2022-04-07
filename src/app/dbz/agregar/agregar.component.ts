import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',

})

export class AgregarComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  };

  constructor(private dbzService: DbzService){}


  //asi nos comunicariamos con  aquellos html que esten escuchando este componente
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; } //si no se ha introducido un nombre, no se hara nada 

    this.dbzService.agregarPersonaje(this.nuevo);
    console.log(this.nuevo);

    //se usa con @output (alternativa a los servicios)
    // this.onNuevoPersonaje.emit(this.nuevo); //@output eviamos al padre el nuevo personaje

    //limpiamos los datos de personaje
    this.nuevo = {
      nombre: '',
      poder: 0
    }


  }
}
