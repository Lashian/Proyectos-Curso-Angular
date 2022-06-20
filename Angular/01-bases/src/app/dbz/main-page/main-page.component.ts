import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent{

//valor por defecto en el form
  nuevo:Personaje={
    nombre: "Maestro Roshi",
    poder: 5000,
  }

  /*get personajes():Personaje[]{
    return this.DbzService.personajes;
  }*/





  constructor(){



  }

}
