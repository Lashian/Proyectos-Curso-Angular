import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
})
export class OrdenarComponent {
  enMayuscula:boolean = false
  toogleMayusculas(){
    if (this.enMayuscula == true) {
        this.enMayuscula = false
    } else this.enMayuscula = true;
}

}
