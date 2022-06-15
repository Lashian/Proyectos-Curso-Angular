/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion: direccion;
    mostrarDireccion: () => string;
}

interface direccion{
    calle: string;
    pais: string;
    ciudad: string;
}


const superHeroe ={
    nombre: 'Superman',
    edad: 30,
    direccion:{
        calle: '123',
        pais: 'México',
        ciudad: 'CDMX'
    },
    mostrarDireccion(){
        return this.nombre + ", " + this.direccion.ciudad + ", " + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);