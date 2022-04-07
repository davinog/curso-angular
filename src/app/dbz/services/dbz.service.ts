import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';


@Injectable()
export class DbzService {
    

    private _personajes: Personaje[] = [
        {
            nombre: 'Goku',
            poder: 15000 
        },
        {
            nombre: 'Vegeta',
            poder: 7500
        }
    ];

    get personajes(): Personaje[]{
        return [...this._personajes];   //operador spread, rompe la referencia y pasa un nuevo array con esos valores
    }

    constructor() {}

    agregarPersonaje(personaje: Personaje){
        //importante usar _ para cojer la propiedad privada y no una copia conel get
        this._personajes.push(personaje);
    }
}

