/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: detalles;
}

interface detalles{
    autor: string;
    ano: number;
}

const reproductor: Reproductor={
    volumen: 10,
    segundo: 56,
    cancion: 'Better of Alone',
    detalles: {
        autor: 'DJ Alice',
        ano: 2000,
    }
}

//Destructuracion de objetos
//const autor = "Fulano"
//const {volumen, segundo, cancion, detalles:{autor: autorDetalle}} = reproductor;  Esta forma es mas dificil de leer pero se puede hacer
const {volumen, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;
console.log()


//console.log("El volumen actual es: " + volumen);
//console.log("El segundo actual es: " + segundo);
//console.log("La cancion actual es: " + cancion);
//console.log("El autor actual es: " + autor);



const dbz: string[] = ["Goku", "Vegeta", "Gohan", "Trunks"];
const [, , p3, p4] = dbz;

//console.log("Personaje 1", dbz[0]);
//console.log("Personaje 2", dbz[1]);
console.log("Personaje 3", p3);
console.log("Personaje 4", p4);


