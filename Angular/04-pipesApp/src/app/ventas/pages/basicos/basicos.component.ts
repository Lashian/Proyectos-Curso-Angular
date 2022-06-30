import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
})
export class BasicosComponent  {

  nombreLower:string = "lashian";
  nombreUpper:string = "LASHIAN";
  nombreCompleto:string = "Lashian Fhlaria";

  fecha:Date = new Date();
}
