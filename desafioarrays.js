 
let edades = [10, 9, 8, 22, 55, 80, 5, 63, 29, 9];

function promedio(array){
    let suma = 0;
    for (i = 0; i <= array.length - 1; i++){
       suma += array[i]
    } return suma / (array.length) 
}
console.log(promedio(edades)); 

function mayor(array){
    let numero = array[0];
    for (i = 0; i <= array.length; i++){
        if (numero < array[i]){
            numero = array[i]
        }
    }return numero
}
console.log(mayor(edades))


function menor(array){
    let numero = array[0];
    for (i = 0; i <= array.length; i++){
        if (numero > array[i]){
            numero = array[i]
        }
    }return numero
}
console.log(menor(edades)) 
 
function duplicado(array){
    let resultado;
    for (i = 0; i <= array.length; i++){
        array[i]
        for (u = i+1; u <= array.length - 1; u++){
            array[u]
            if (array[i] == array[u]){
               return true
        }
    }
}return false
}
console.log(duplicado(edades)); 

function coincidencia(array, edadBuscada){
    for (i = 0; i <= array.length; i++){
        if (array.indexOf(edadBuscada) != -1){
            return array.indexOf(edadBuscada)
        }
    } return null
}
console.log(coincidencia(edades, 75)); 

let edades1 = {
    edadesMenor: [],
    edadesMayor: []
};

function convertToObj (array, objetoliteral){
    for (let i = 0; i <= array.length - 1; i++){
        if (array[i] < 18){
            objetoliteral.edadesMenor.push(array[i])
        }else {objetoliteral.edadesMayor.push(array[i])}
    }return objetoliteral
}
console.log(convertToObj (edades, edades1)); 

