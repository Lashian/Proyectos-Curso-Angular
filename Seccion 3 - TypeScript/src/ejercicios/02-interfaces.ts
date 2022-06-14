let habilidades: string[] = ["Slash", "Stab", "Fireball", "Iceball"];

//habilidades.push("heal");
interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {

    nombre: "Lashian",
    hp: 100,
    habilidades: habilidades,

};

personaje.puebloNatal = "Villanelle";

console.table(personaje);