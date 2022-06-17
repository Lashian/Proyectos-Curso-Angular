import {Component} from '@angular/core';


@Component({
    selector: 'app-contador',
    templateUrl: './contador.component.html',
})
export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 0;
    base:number = 5
    
    sumar(){
        this.numero++;
    }
    
    restar(){
        this.numero--;
    }
    
    acumular(valor:number){
        this.numero += valor;
    }

}