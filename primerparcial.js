//EJERCICIO 1

const devolverNumero = (numero) => numero * 2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 && numero2 ? numero1/numero2 : 'Ingrese un numero distinto de 0'

console.log(devolverNumero(25000));
console.log(multiplicar(50, 10));
console.log(dividir(14000, 2));

//EJERCICIO 2

const ciclista = {
    nombre: 'georgina',
    apellido: 'folco',
    edad: 28,
    tieneBici: false
}

const habilitarInscripcion = (objeto) => {
    
    if (objeto.edad >= 18 && objeto.tieneBici){
        return 'Puede competir'
    }
    else if (objeto.edad < 18 && objeto.tieneBici){
        return 'Podrá competir pero con un adulto acompañante'
    }
    else if (!objeto.tieneBici){  
        return 'No podrá competir'
    }
} 
console.log(habilitarInscripcion(ciclista));

//EJERCICIO 3

const competidores = [];

let competidor1 = {
    nombre: 'Juan',
    edad: 42,
    kilometrosRecorridos: 80,
   }
let competidor2 = {
    nombre: 'Sofia',
    edad: 22,
    kilometrosRecorridos: 90
   }
let competidor3 = {
    nombre: 'Maria',
    edad: 45,
    kilometrosRecorridos: 70
    }

console.log(competidores);
competidores.push(competidor1, competidor2, competidor3);
console.log(competidores);

const competencia100Km = (arrayC) => {

    for (let i = 0; i < arrayC.length; i++){
        arrayC[i].kilometrosRecorridos += 100
    } return arrayC
}

console.log(competidores);
competencia100Km(competidores);
console.log(competidores);

