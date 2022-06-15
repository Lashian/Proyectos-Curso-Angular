function sumar (a: number, b: number): number {

    return a + b;
}

const sumarFelcha  = (a: number, b: number):number =>{
    return a + b;
}

function multiplicar (numbero:number , otroNumero?:number, base:number = 2){

    return numbero * otroNumero * base;
}

interface personajeRPG{
    nombre: string;
    hp: number;
    mostrarHp:() => void;

}


function curar(personaje: personajeRPG, curarX: number): void{
    personaje.hp += curarX;

}

const nuevoPersonaje : personajeRPG = {
    nombre: "Lashian",
    hp: 100,
    mostrarHp(){
        console.log("Su hp es: " + this.hp);
    }

}

curar(nuevoPersonaje, 10);

nuevoPersonaje.mostrarHp();
//console.log(personaje)

//console.log(multiplicar(10, 2));

//const resultado = sumar(10, 20);

//console.log(resultado) ;