import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar-personaje',
  templateUrl: './agregar-personaje.component.html',
})
export class AgregarPersonajeComponent {

  @Input() nuevo:Personaje ={
    nombre: "",
    poder:0,
  }

  constructor(private dbzService: DbzService) { 
    
  }

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();
  
  
  agregar(){
    if(this.nuevo.nombre.trim().length==0) return;
      this.dbzService.agregarPersonaje(this.nuevo);
    //this.onNuevoPersonaje.emit(this.nuevo)

    this.nuevo={
      nombre: "",
      poder:0,
    }
  }

}
