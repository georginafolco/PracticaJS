//MICRO DESAFIOS - PASO 1

//EJERCICIO 1
let jugadores = [
    {
      dni: 123,
      nombre: "Lionel Messi",
      goles: 0,
      precioEnDolares: 1000,
      tarjetasAmarillas: 0,
      esperaUnPartido: false
    },
    {
      dni: 1233,
      nombre: "Gonzalo Higuaín",
      goles: 0,
      precioEnDolares: 1000,
      tarjetasAmarillas: 0,
      esperaUnPartido: true
    },
    {
      dni: 1234,
      nombre: "Sergio Agüero",
      goles: 0,
      precioEnDolares: 1000,
      tarjetasAmarillas: 0,
      esperaUnPartido: false
    },
    {
      dni: 1235,
      nombre: "Maxi Rodríguez",
      goles: 0,
      precioEnDolares: 1000,
      tarjetasAmarillas: 4,
      esperaUnPartido: false
    },
    {
      dni: 1236,
      nombre: "Ezequiel Lavezzi",
      goles: 0,
      precioEnDolares: 1000,
      tarjetasAmarillas: 0,
      esperaUnPartido: false
    }
  ];
  //console.table(jugadores);
  
  const hacerGol = (arrayJugadores, dni) => {
    for (let i = 0; i < arrayJugadores.length; i++) {
      if (arrayJugadores[i].dni === dni) {
        arrayJugadores[i].goles += 1;
      }
    }
  };
  //hacerGol(jugadores, 123);
  //console.table(jugadores);

  const incrementarValorPorGol = (arrayJugadores, dni) => {
    for (let i = 0; i < arrayJugadores.length; i++) {
      if (arrayJugadores[i].dni === dni) {
        arrayJugadores[i].precioEnDolares += 10000;
      }
    }
  };
  //incrementarValorPorGol(jugadores, 123);
  //console.table(jugadores);

  const hattrick = (arrayJugadores, dni) => {
    for (let i = 0; i < 3; i++){
        hacerGol(arrayJugadores, dni)
    }
    for (let j = 0; j < arrayJugadores.length; j++){
        if (arrayJugadores[j].dni === dni){
            arrayJugadores[j].precioEnDolares *= 1.1
        }
    }
  }
  //hattrick(jugadores, 1236)
  //console.table(jugadores);

  const tarjetasAmarillas = (arrayJugadores, dni) => {
    for (let i = 0; i < arrayJugadores.length; i++){
        if (arrayJugadores[i].dni === dni){
            arrayJugadores[i].tarjetasAmarillas += 1
        }
        if (arrayJugadores[i].tarjetasAmarillas === 5){
            arrayJugadores[i].esperaUnPartido = true
            arrayJugadores[i].tarjetasAmarillas = 0
        }
    }
  }
  //tarjetasAmarillas(jugadores, 1235)
  //console.log(jugadores);

//EJERCITACION ALGORITMOS

//EJERCICIO 1
//https://codesandbox.io/s/fizzbuzz-forked-iltchi
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0) {
      //console.log("Fizz");
    } else if (i % 5 === 0) {
      //console.log("Buzz");
    } else if (i % 3 === 0 && i % 5 === 0) {
      //console.log("FizzBuzz");
    } else {
      //console.log(i);
    }
  }

//EJERCICIO 2
//https://codesandbox.io/s/busqueda-en-array-forked-fv5iry?file=/src/index.js
let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];
let indice = 10;

function devolverElemento(array, indice) {
    for (let i = 0; i < array.length; i++) {
      //console.log(array[indice]);
    }
  }
  devolverElemento(array, indice);  

//EJERCICIO 3
//https://codesandbox.io/s/dias-del-mes-forked-n3sixd?file=/src/index.js
function diasDelMes(numeroMes) {
    let meses31 = [1, 3, 5, 7, 8, 10, 12];
    let meses30 = [2, 4, 6, 9, 11];
  
    if (meses31.indexOf(numeroMes) !== -1) {
      return 31;
    } else if (meses30.indexOf(numeroMes)) {
      return 30;
    } else {
      return 28;
    }
  };
  //console.log(diasDelMes(2));

//EJERCICIO 4
const invertirNumeroMethod1 = (numero) => {
  let n, m
  let numeroInvertido = 0 

  for (n = numero; n >= 10; n) {
    m = n%10
    numeroInvertido += m
    n = Math.trunc(n/10)
    numeroInvertido *= 10
  }
  return numeroInvertido += n
}

const invertirNumeroMethod2 = (numero) => {
  let invertido = Number(numero.toString().split("").reverse().join(""))
  return invertido
}

let numerosRandom = [9428057895, 654878655, 1857474110, 14478, 942, 549, 58874];

const test = (array) => {
  let resultado1;
  let resultado2;

  for (let i = 0; i < array.length; i++){
    resultado1 = invertirNumeroMethod1(array[i])
    console.log(resultado1);
    resultado2 = invertirNumeroMethod2(array[i])
    console.log(resultado2);

    if (resultado1 === resultado2){
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
test(numerosRandom) 

//EJERCICIO 5
let arrayNumeros = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

const imprimirDuplicados = (array) => {
  for (let i = 0; i < array.length; i++) {
    array[i]
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j] && i !== j){
        console.log(array[i]);
      } 
    }
  }
}
imprimirDuplicados(arrayNumeros)


