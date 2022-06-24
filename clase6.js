const prompt = require("prompt-sync")({ sigint: true });

x = prompt("Ingresar un numero: ")
y = prompt("Ingresar un numero: ")
z = prompt("Ingresar un numero: ")

const sumar = (x, y, z) => x + y;
const restar = (x, y) => x - y;
const multiplicar = (x, y) => x * y;
const dividir = (x, y) => x / y;
const cuadradoDeUnNumero = x => {
    let a = multiplicar(x, x)
    return a
};
const promedioDeTresNumeros = (x, y, z) => {
    let a = sumar(x, y, z) 
    let b = dividir(a, 3)
    return b
};
const calcularPorcentaje = (x, y) => {
    let a = multiplicar(x, y)
    let b = dividir (a, 100)
    return b
};
const generadorDePorcentaje = (x, y) => {
    let a = dividir(x, y)
    let b = multiplicar (a, 100)
    return b
};

console.log("---Testeo de operaciones - Calculadora---")
console.log(sumar(Number(x), Number(y), Number(z)));
console.log(restar(Number(x), Number(y)));
console.log(multiplicar(Number(x), Number(y)));
console.log(dividir(Number(x), Number(y)));
console.log(cuadradoDeUnNumero(Number(x)));
console.log(promedioDeTresNumeros(Number(x), Number(y), Number(z)));
console.log(calcularPorcentaje(Number(x), Number(y)));
console.log(generadorDePorcentaje(Number(x), Number(y)));