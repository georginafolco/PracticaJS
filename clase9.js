const prompt = require("prompt-sync")({ sigint: true });

let frase = prompt('Ingrese frase: ');
function imprimirFrase(frase) {
};
console.log(frase);
imprimirFrase(frase);

let nombre = prompt('Ingrese su nombre: ');
function saludarUsuario(nombre){
    console.log('Hola ' + nombre + ' ! ');
};
saludarUsuario(nombre)

let primerNumero = Number(prompt('Ingresa un numero: '));
let segundoNumero = Number(prompt('Ingresa otro numero: '));
let suma = (primerNumero, segundoNumero) => primerNumero + segundoNumero;
console.log(suma(primerNumero, segundoNumero)); 

let numero1 = Number(prompt('Ingrese numero1: '));
let numero2 = Number(prompt('Ingrese numero2: '));
function sumar(numero1, numero2) {
    return numero1 + numero2;
};
console.log(sumar(numero1, numero2));

let anioNacimiento = Number(prompt('Ingrese su año de nacimiento: '));
let anioActual = 2022;
function calcularEdad(añoNacimiento, añoActual) {
    return añoActual - añoNacimiento;
};
console.log(calcularEdad(anioNacimiento, anioActual));

function numerosPares(numeroInicial){
    for (i = 1; i <= 100; i++){
        if(i%2 == 0){
            console.log(i); 
        }
    }
};
numerosPares(1);

let nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"];
let iterarNombre = (nombre) => {
    for (let i = 0; i < nombre.length; i++) {
        console.log(nombre[i]);
    }
};
iterarNombre(nombre);

function pseudocodigo(numero){
    if (numero > 500){
        return numero * 0.18
    }else{
        return ('Ingresaste un numero incorrecto');
    }
};
console.log(pseudocodigo(300));

let arrayRecibido = [];
function elemento(arrayRecibido){
     if (arrayRecibido.length < 3){
        return -1
    }else {
        return arrayRecibido[2]
    }
};
console.log(elemento([1, 2, 3, 4]));

let numero = Number(prompt("Ingrese un numero de hasta dos cifras: "));
function devolver (numero){
    if (numero < 10){
        return 10 - numero
    }else if (numero >= 10 && numero < 100){
        return 100 - numero
    }
};
console.log(devolver(numero));



