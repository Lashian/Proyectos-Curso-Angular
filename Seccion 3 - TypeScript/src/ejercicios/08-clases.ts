/*
    ===== Código de TypeScript =====
*/
class PersonaNormal{

    constructor(
        public nombre:string, 
        public direccion:string
        ){}

}

class Heroe extends PersonaNormal{
    //public nombre:string;
    //public edad:number;
    //poder:string;

    constructor(
        public nombre: string,
        public edad: number,
        public poder: string,
        public nombreReal: string,
    ){
        super(nombreReal, "Kamehouse");
    }
}



const goku = new Heroe("goku", 31, "kamehameha", "Kakarot");


console.log(goku);