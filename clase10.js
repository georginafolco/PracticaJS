//CONSIGNA Colecciones de películas
//Ejercicio 1
let peliculas = ['star wars', 'totoro', 'rocky', 'pulp fiction', 'la vida es bella'];
console.log(peliculas.indexOf('rocky'));

//Ejercicio 2
function conversionMayus(array){
  let peliculasMayus = array.join().toUpperCase()
  return Array(peliculasMayus);
};
console.log(conversionMayus(peliculas));

peliculas = peliculas.map(function (array){
  return array.toUpperCase();
});
console.log(peliculas);

function convertirMayus(parametro){
  for (i = 0; i < parametro.length; i++) {
    parametro[i] = parametro[i].toUpperCase()
  }return parametro;
};
console.log(convertirMayus(peliculas));

//Ejercicio 3
let peliculasAnimadas = ['toy story', 'finding Nemo', 'kung-fu panda', 'wally', 'fortnite'];

function unirArrays(array1, array2){
  let arrayFinal = (array1 + ',' + array2).toUpperCase().split(',');
  return arrayFinal; 
};
peliculas = unirArrays(peliculas, peliculasAnimadas);
console.log(peliculas);

//Ejercicio 4
let videoJuego = peliculas.pop();
console.log(videoJuego);
console.log(peliculas);

//Ejercicio 5
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararScores(x, y, z){
  for (i = 0; i < x.length; i++){
    if (x[i] === y[i]){
      console.log('el score de ' + z[i] + ' es IGUAL');
    }else{
      console.log('el score de ' + z[i] + ' es DISTINTO');
    };
  };
};
compararScores(asiaScores, euroScores, peliculas);

//CONSIGNA Array Inverso

//Ejercicio 1
function imprimirInverso(arrayP){
  for (let i = arrayP.length -1; i >= 0; i--){
    let ultimoElemento = arrayP.pop()
    console.log(ultimoElemento)
  };
};
imprimirInverso([1, 2, 3, 4, 5])

//Ejercicio 2
let js = ['funcion', 'loop', 'if', 'variable'];

function inversor(array){
  return array.reverse();
}
console.log(inversor(js));

function inversor(array){
  let arrayInvertido = [];
  for (i = array.length - 1; i >= 0; i--){
    arrayInvertido[i] = array.shift()
  } return arrayInvertido
}
console.log(inversor(js));

function sumArray (tripleArray){
  if (tripleArray.length == 3){
    return tripleArray[0] + tripleArray[1] + tripleArray[2]
    } 
  };
console.log(sumArray([9, 8, 23]));


function join(stringArray){
  if (stringArray.length == 4){
    return stringArray[0] + stringArray[1] + stringArray[2] + stringArray[3]
    }
  }
console.log(join(['R', 'O', 'M', 'A']));

