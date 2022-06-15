/*
    ===== Código de TypeScript =====
*/

//Definicion: Los decoradores son funcionen que expanden tus clases

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
    reportingURL = "http://www...";
    };
}



@reportableClassDecorator
class MiSuperClase{
    public miPropiedad:string = "ABC123"

    imprimir(){
        console.log("Hola mundo");
    }

}

console.log(MiSuperClase)

const miClase= new MiSuperClase();

console.log(miClase.miPropiedad);