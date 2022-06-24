/* //C17A

//EJERCICIO 1
let matriz = [['a', 'b'], ['c', 'd']];

//EJERCICO 2
console.log(matriz[1][1]);

//EJERCICIO 3
console.log(matriz);
matriz[1][0] = 'x';
console.log(matriz);

//EJERCICIO 4
let arrayMatriz = []
let arrayX=["x0","x1","x2"]
let arrayY=["y0","y1","y2"]
arrayMatriz[0] = arrayX
arrayMatriz[1] = arrayY
console.table(arrayMatriz);

//Imprimir todos los valores de una matriz
for(let i = 0; i < arrayMatriz.length; i++) {
    console.log(arrayMatriz[i])
}
//Imprimir primera columna 
for(let i = 0; i < arrayMatriz.length; i++) {
    console.log(arrayMatriz[i][0])
}
//Imprimir primera fila
for(let i=0; i <= arrayMatriz.length; i++) {
    console.log(arrayMatriz[0][i])
}
//Recorrer toda la matriz ==> DOBLE FOR 
for(let i=0; i<arrayMatriz.length; i++) {
    for(let j=0; j<arrayMatriz[i].length; j++) {
        console.log(arrayMatriz[i][j]);
    }
}

//C17S
//EJERCICIO 1
//https://codesandbox.io/s/mesa-17-ejercicio-1-forked-cgx2o1?file=/src/index.js:0-531
//Declara una variable que contenga una matriz de 5x5 llena de puros numeros enteros y positivos

let numeros = [
    [28, 35, 21, 26, 1],
    [9, 18, 10, 2, 94],
    [47, 59, 56, 21, 74],
    [45, 87, 96, 87, 4]
  ];

//Luego, escribe un algoritmo para sumar todos los numeros en la matriz.

const sumar = (numeros) => {
    let suma = 0;
  
    for (let i = 0; i < numeros.length; i++) {
      for (let j = 0; j < numeros[i].length; j++) {
        suma += numeros[i][j];
      }
    }
    return suma;
  };
  console.log(sumar(numeros)); 
*/
//EJERCICIO 2
const crearMatriz = () => {
  let matriz = []
  
  for (let i = 0; i < 10; i++){
    let aux = [];

    for (let j = 1; j <= 10; j++){
      aux.push(i * 10 + j)
    } matriz.push(aux)

      } return matriz
}
const matriz10X10 = crearMatriz()
//console.log(matriz10X10);

//EJERCICIO 3
const sumarDiagonal = (matriz) => {
  let suma = 0;

  for (let i = 0; i < matriz.length; i++){
    suma += matriz[i][i]
    }
    return suma
  }
console.log(sumarDiagonal(matriz10X10));

const sumarOtraDiagonal = (matriz) => {
  let suma = 0;

  for (let i = matriz.length - 1; i >= 0; i--){
    suma += matriz[i][i]
    }
    return suma
}
console.log(sumarOtraDiagonal(matriz10X10)); 