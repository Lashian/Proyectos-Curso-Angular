import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
//import{MainPageComponent} from '../main-page/main-page.component';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {

  @Input() personajes:Personaje[] = [];
  

  //ciclos de vida
  //Lo que hace es que ya que comparten el mismo objeto padre e hijo, al hacer push al hijo tmb se hace push al padre
  ngOnInit(): void {
    
    this.personajes.push( {
      nombre: "Frizzer",
      poder: 9001,
    },)
  }

}
