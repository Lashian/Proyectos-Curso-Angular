/*
    ===== Código de TypeScript =====
*/
import { Producto } from './06-Desestructuracion-funcion';
import { calculaImpuestos } from './06-Desestructuracion-funcion';

const carritoCompras: Producto[] = [
    {
        nombre: 'Nokia',
        precio: 450,
    },
    {
        nombre: 'Iphone',
        precio: 1000,
    }

];

const [total, isv] = calculaImpuestos(carritoCompras);

console.log("Total " , total)
console.log("ISV " , isv)