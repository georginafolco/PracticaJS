//let numeros = [5, 2, 8, 6, 4];
let numeros = [99, 4, 4, 3, 581, 785, 52, 587, 123, 15, 19, 0, 78];

let ordenar = (array) => {
    
    for (let i = 0; i < array.length; i++){
        
        for (let u = 0; u < array.length; u++){
            //
            if (array[i] < array[u]){
                let aux = array[i]  
                array[i] = array[u]
                array[u] = aux         
            }
        }
        }
     return array 
    }
//console.log(ordenar(numeros))

let ordenarArray = (array) => {

    for (let u = 0; u < array.length; u++){

    for (let i = 0; i < array.length - u; i++){
        
        if (array[i] > array[i+1]){
            let aux = array[i]
            array[i] = array[i+1]
            array[i+1] = aux 
        }
    }
    } return array 
}
console.log(ordenarArray(numeros))