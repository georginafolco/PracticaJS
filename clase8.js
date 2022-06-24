const prompt = require("prompt-sync")({ sigint: true });

function diezSiguientes (valor){
    for (i = valor; i <= valor + 9; i++){
        console.log(i+1);
    }
};
diezSiguientes(5);

function saltarTresEnTres(x){
    for (i = x; i <= 17; i++){
        console.log(i+3);
    }
};
saltarTresEnTres(0);

function sumatoriaCeroACien(x){
    let suma = 0;
    for (i = x; i <= 100; i++){
        suma += i //le suma el valor de i a la variable "suma"
    };
    return suma
};
console.log(sumatoriaCeroACien(0)); 

function factoreo(numero){
    for(i = 1; i <= numero; i++){
        console.log(i*numero); 
    }
}
factoreo(12);

