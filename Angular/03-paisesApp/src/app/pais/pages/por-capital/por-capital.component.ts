import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent  {

  termino:string = ""
  hayError: boolean = false;
  hayCapital:boolean = false;
  paises:Country[]=[];

  constructor(private paisService:PaisService) { }

  buscar(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.hayCapital = false;
    
    this.paisService.buscarCapital(this.termino)
    .subscribe((paises)=>{
      this.hayCapital = true;
      this.paises = paises;
    },
    (error)=>{
      this.hayError = true;
      this.paises=[];
    });
    console.log(this.termino)
  }
  

}
