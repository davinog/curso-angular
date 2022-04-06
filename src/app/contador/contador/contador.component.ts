import { Component } from "@angular/core";


@Component({
    selector: 'app-contador',
    templateUrl:'contador.component.html'
})

export class ContadorComponent {
    titulo: string = 'App Contador';
    numero: number = 10;
    base: number = 5;
  
    acumular (valor: number ) : void {
      this.numero+= this.base * valor;
    }
}