import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.services';
//import{MainPageComponent} from '../main-page/main-page.component';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent{

  //@Input() personajes:Personaje[] = [];
  get personajes(){
    return this.dbzService.personajes;
  }
  
  constructor(private dbzService:DbzService){

  }



  //ciclos de vida
  //Lo que hace es que ya que comparten el mismo objeto padre e hijo, al hacer push al hijo tmb se hace push al padre
  /*ngOnInit(): void {
    
    this.personajes.push( {
      nombre: "Frizzer",
      poder: 9001,
    },)
  }*/

}
