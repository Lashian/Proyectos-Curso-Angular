import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent  {

  termino:string = ""
  hayError: boolean = false;
  hayPais:boolean = false;
  paises:Country[]=[];

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
  this.hayError = false;
  this.termino = termino;
}

}
