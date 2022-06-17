import { Component } from "@angular/core";

@Component({
    selector: "app-heroe",
    templateUrl: "./heroe.component.html",

})
export class HeroeComponent{

    nombre: string = "Estinien";
    edad: number = 31;

    get nombreCapitalizado(){

        return this.nombre.toUpperCase();
    }

    obtenerNombre():string{
        return `${this.nombre} - ${this.edad}`;

    }

    cambiarNombre():void{
        this.nombre = "Y'shtola";

    }

    cambiarEdad():void{
        this.edad = 29;

    }

}