import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
})
export class NoComunesComponent  {

nombre:string = "Lashian";
genero:string = "femenino";
//genero:string = "masculino";

invitacionMap ={
  'masculino': 'invitarlo',
  'femenino': 'invitarla',
}

clientes:string[]=['Ophelia', 'Lashian','Lillia', 'Lucis','Spirit'];
clientesMap ={
  "=0": "no hay clientes",
  "=1": " un cliente",
  "other": " # clientes",
}


cambiarGenero(){
  console.log('click')
  this.nombre = "Fhlaria";
  this.genero = "masculino";
}

cambiarCliente(){
  this.clientes = ['Ophelia'];
}

//keyValue pipe
persona ={
  nombre: "Lashian",
  FC: "Paw paw",
  class: "Warrior",
}

//Async pipe
myObservable = interval(1000); //0,1,2,3...

valorPromesa = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve("Lillia doesn't want to be inside the code");
  }, 3500)

});

}


