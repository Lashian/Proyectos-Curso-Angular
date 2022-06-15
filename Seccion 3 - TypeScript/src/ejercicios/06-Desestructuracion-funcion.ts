/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    nombre: string;
    precio: number;
}

const telefono: Producto = {
    nombre: 'Iphone',
    precio: 1000
}

const tableta: Producto = {
    nombre: 'Tableta',
    precio: 500

}

export function calculaImpuestos(productos: Producto[]):[number, number]{
    let total = 0;
    productos.forEach(({precio}) =>{
        total += precio;

    })
    return [total, total * 0.15];
}

const articulos = [telefono, tableta];
const [total, isv] = calculaImpuestos(articulos);

//console.log("ISV: ", isv)
//console.log("Total: ", total)