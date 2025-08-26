/* 
    Como creo mi propio tipo de dato?


    Para ello usaremos funciones constructoras.    
*/

// Plantilla para fabricar pokemones
// function Pokemon(nombre, tipo, frase){
//     // Atributos
//     this.nombre = nombre;
//     this.tipo = tipo;
//     // Metodo
//     this.hablar = function() {
//         return frase;
//     };
// }

// const pikachu = new Pokemon("Pikachu", "Electrico", "Pika pika");
// const squirtle = new Pokemon("Squirtle", "Agua", "Vamo a calmarno");
// const charmander = new Pokemon("Charmander", "Fuego", "Char char");
// const bulbasaur = new Pokemon("Bulbasaur", "Planta/Veneno", "Estoy re duro");



// class

class Persona {
    constructor(brazos, piernas, frase){
        // Atributos
        this.brazos = brazos;
        this.piernas = piernas;
        this.frase = frase
    }

    hablar(){
        return this.frase
    }
}

const diego = new Persona(2,2,"Hoy lei que lo que vemos sucedio hace 14ms.")
const messi = new Persona(2,3,"Anda palla bobo!")


class Empleado extends Persona {
    constructor(brazos, piernas, frase, salario, aguinaldo){
        super(brazos, piernas, frase);
        this.salario = salario;
        this.aguinaldo = aguinaldo;
    }

    hablar(){
        return this.frase
    }
}

const roberto = new Empleado(2,2,"Contexto del objeto",600000, 30000)

class Developer extends Empleado {
    constructor(brazos, piernas, frase, salario, aguinaldo){
        super(brazos, piernas, frase, salario, aguinaldo);
    }
}