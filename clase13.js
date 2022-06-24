//Loop de pares
function loopDePares(num){
    for (let i = 0; i <= 100; i++){
        let numero = i + num 

        if (numero%2 == 0){
            console.log('El número ' + numero + ' es par.')
        }else {
            console.log(numero)
        }
        }
};
loopDePares(3); 

//Loop de impares con palabra 
function loopDeImpares(num, palabra){
    for (let i = 0; i <= 100; i++){
        let numero = i + num

        if (numero%2 !== 0){
            console.log(palabra);
        }else {
            console.log(numero);
        }
    }
}
loopDeImpares(3, 'pasapalabra'); 

//Sumatoria 
function sumatoria(num){
    let suma = 0

    for (let i = 1; i <= num; i++){
        suma += i
    } return suma
}
console.log(sumatoria(3));

//Nuevo arreglo
function nuevoArray(num){
    let array = []
    
    for (let i = 0; i <= num - 1; i++){
        array[i] = i + 1
    }return array
}
console.log(nuevoArray(10)); 

//Similar String.split()
function split(string){
    let array = []

    for (let i = 0; i <= string.length - 1; i++){
        array[i] = string[i]
    }return array
}
console.log(split('JAVASCRIPT'));

//Manejando dos arrays
function arrayHandler(array1, array2){

    if (array1.length === array2.length){
        for (i = 0; i <= array1.length - 1; i++){
            console.log('Soy ' + array1[i] + ' y yo soy ' + array2[i])
        }
    }
}
arrayHandler(['Batman', 'Ironman', 'Harry'], ['Robin', 'Spiderman', 'Hermione']);


//Palíndromo
function palindromo(palabra){
    let arbalap = ' '

    for (let i = palabra.length - 1; i >= 0; i--){
       arbalap += palabra[i]
    } if (palabra == arbalap.trim()) {
        return true
    }else {
        return false
    }

}
console.log(palindromo('ANA'));
 


//PARTE 1 - EJERCICIO 1
let arrayCeros = ['0', '0', '0', '0', '0', 'O', '0', '0', '0'];

function encontrarIntruso(array){

    for (let i = 0; i <= array.length; i++){
        if (array[i] !== '0'){
            array[i] = '0'
            return i
        }
    }
}
//console.log(arrayCeros)
//console.log(encontrarIntruso(arrayCeros));
//console.log(arrayCeros); 

//EJERCICIO 2
let arrayCeros2 = ['0', '0', '0', '0', '0', 'O', '0', '0', 'O', '0', 'O'];

function encontrarIntrusos(array){
    let intrusos = []

    for (let i = 0; i < array.length; i++){

        if (array[i] !== '0'){
            array[i] = '0'
            intrusos.push(i)
        }
    }
    return intrusos
}
console.log(arrayCeros2)
console.log(encontrarIntrusos(arrayCeros2));
console.log(arrayCeros2)


//PARTE 2

const arrayProfesionales = [
    {
      id: 0,
      estaHabilitado: false,
      nombre: "Huber Wilkins",
      email: "huberwilkins#speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 3,
    },
    {
      id: 1,
      estaHabilitado: true,
      nombre: "Goldie Haley",
      email: "goldiehaley#speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 3,
    },
    {
      id: 2,
      estaHabilitado: false,
      nombre: "Pena Landry",
      email: "penalandry@speedbolt.com",
      especialidad: "Dermatologia",
      cantidadConsultas: 9,
    },
    {
      id: 3,
      estaHabilitado: false,
      nombre: "Leanne Burch",
      email: "leanneburch#speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 13,
    },
    {
      id: 4,
      estaHabilitado: false,
      nombre: "Haynes Fuentes",
      email: "haynesfuentes@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 75,
    },
    {
      id: 5,
      estaHabilitado: true,
      nombre: "Tamika Fuentes",
      email: "tamikanewman@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 32,
    },
    {
      id: 6,
      estaHabilitado: true,
      nombre: "Russo Baldwin",
      email: "russobaldwin@speedbolt.com",
      especialidad: "Dermatologia",
      cantidadConsultas: 67,
    },
    {
      id: 7,
      estaHabilitado: true,
      nombre: "Dodson Shaffer",
      email: "dodsonshaffer#speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 2,
    },
    {
      id: 8,
      estaHabilitado: true,
      nombre: "Guerra Bright",
      email: "guerrabright#speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 6,
    },
    {
      id: 9,
      estaHabilitado: true,
      nombre: "Dina Navarro",
      email: "dinanavarro@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 8,
    },
    {
      id: 10,
      estaHabilitado: false,
      nombre: "Stafford Watts",
      email: "staffordwatts@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 0,
    },
    {
      id: 11,
      estaHabilitado: false,
      nombre: "Joni Avery",
      email: "joniavery@speedbolt.com",
      especialidad: "Neumonologia",
      cantidadConsultas: 6,
    },
    {
      id: 12,
      estaHabilitado: true,
      nombre: "Mayra Tran",
      email: "mayratran@speedbolt.com",
      especialidad: "Oftamologia",
      cantidadConsultas: 2,
    },
    {
      id: 13,
      estaHabilitado: false,
      nombre: "Ward Dale",
      email: "warddale@speedbolt.com",
      especialidad: "Cardiologia",
      cantidadConsultas: 23,
    },
];
//console.table(arrayProfesionales[0].id);

const buscarPorId = (array, id) => {

    for (let i = 0; i < array.length; i++){

        if (array[i].id === id){
            return array[i]
        } 
    } 
    return null
};
console.table(buscarPorId(arrayProfesionales, 13)) 

const filtrarHabilitadosPorEspecialidad = (arrayP, especialidad) => {
    let resultado = [];

    for (let i = 0; i < arrayP.length; i++){
        
        if (arrayP[i].especialidad === especialidad && arrayP[i].estaHabilitado){
            resultado.push(arrayP[i]) 
        }
    }
    return resultado
}
console.table(filtrarHabilitadosPorEspecialidad(arrayProfesionales, 'Cardiologia')) 
console.table(filtrarHabilitadosPorEspecialidad(arrayProfesionales, 'Cirujanos'))  

const realizarConsulta = (arrayP, id) => {
  
    let resBuscar = buscarPorId(arrayP, id)
    
    if (resBuscar) {
      resBuscar.cantidadConsultas = resBuscar.cantidadConsultas + 1;
    }else{
      return null
    }
  };
console.table(buscarPorId(arrayProfesionales, 13));
realizarConsulta(arrayProfesionales,13);
console.table(buscarPorId(arrayProfesionales, 13)); 


 const corregirEmails = (arrayP) => {
    
    for (let i = 0; i < arrayP.length; i++){
        arrayP[i].email

        if (arrayP[i].email.indexOf('#') !== -1){
            arrayP[i].email = arrayP[i].email.replace('#', '@')
        }
    }
};
console.log(arrayProfesionales);
corregirEmails(arrayProfesionales);
console.log(arrayProfesionales);
  

