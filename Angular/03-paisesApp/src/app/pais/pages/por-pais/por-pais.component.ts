import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles:[
    `
    li{
      cursor: pointer;
    }
    `
    ]
})
export class PorPaisComponent  {

  termino:string = ""
  hayError: boolean = false;
  hayPais:boolean = false;
  paises:Country[]=[];
  paisesSugeridos:Country[] = [];
  mostrarSugerencias:boolean = false;

  constructor(private paisService:PaisService) { }

buscar(termino:string){
  this.hayError = false;
  this.termino = termino;
  this.hayPais = false;
  
  this.paisService.buscarPais(this.termino)
  .subscribe((paises)=>{
    this.hayPais = true;
    this.paises = paises;
  },
  (error)=>{
    this.hayError = true;
    this.paises=[];
  });
  console.log(this.termino)
}

sugerencias(termino:string){
    this.mostrarSugerencias = true;
  this.hayError = false;
  this.termino = termino;
  this.paisService.buscarPais(termino)
  .subscribe(paises=> this.paisesSugeridos = paises.splice(0,5));
}


buscarSugerido(termino:string){
  this.buscar(termino);
}

}
