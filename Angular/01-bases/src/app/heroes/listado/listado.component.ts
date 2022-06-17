import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes:string[] = ["Y'shtola", "Tataru", "Lashian"];
  heroesBorrados:string = "";

  heroeBorrado(){
    this.heroesBorrados = this.heroes.shift() || "";
    //console.log(heroeBorrado);

  }


}


