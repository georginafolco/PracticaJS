//EJERCICIO 1

const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

//Obtener en un nuevo array las edades menores a 18.
const edadesMenores = (arrayEdades) => {
    let edadesMenores = []

    for (let i = 0; i <= arrayEdades.length - 1; i++){

        if (arrayEdades[i] < 18){
            edadesMenores.push(arrayEdades[i])
        }
    }
    return edadesMenores
}
//console.log(edadesMenores(edades));

//Obtener en un nuevo array las edades mayor o igual a 18.
const edadesMayores = (arrayEdades) => {
    let edadesMayores = []

    for (let i = 0; i <= arrayEdades.length - 1; i++){

        if (arrayEdades[i] >= 18){
            edadesMayores.push(arrayEdades[i])
        }
    }
    return edadesMayores
}
//console.log(edadesMayores(edades));

//Obtener en un nuevo array las edades igual a 18.
const edades18 = (arrayEdades) => {
    let edades18 = []

    for (let i = 0; i <= arrayEdades.length - 1; i++){

        if (arrayEdades[i] === 18){
            edades18.push(arrayEdades[i])
        }
    }
    return edades18
}
//console.log(edades18(edades)); 

//Obtener el menor.
const elMenor = (arrayEdades) => {
    let elMenor = arrayEdades[0]

    for (let i = 1; i <= arrayEdades.length; i++){
        if (elMenor > arrayEdades[i]){
            elMenor = arrayEdades[i]
        }

    }return elMenor
} 
//console.log(elMenor(edades));

//Obtener el mayor. 
const elMayor = (arrayEdades) => {
    let elMayor = arrayEdades[0]

    for (let i = 1; i <= arrayEdades.length; i++){
        if (elMayor < arrayEdades[i]){
            elMayor= arrayEdades[i]
        }

    }return elMayor
} 
//console.log(elMayor(edades));

//Obtener el promedio de edades.
const promedioEdades = (arrayEdades) => {
    let suma = 0

    for (let i = 0; i < arrayEdades.length; i++){
        suma += arrayEdades[i]
    }
    return suma/arrayEdades.length
}
//console.log(promedioEdades(edades));

//Incrementar en 1 todas las edades.
const incrementarEdades = (arrayEdades) => {
    
    for (let i = 0; i < arrayEdades.length; i++){
        arrayEdades[i] = arrayEdades[i] + 1
    } 
    return arrayEdades
}
//console.log(incrementarEdades(edades)); 

//EJERCICIO 2
const arrayCuentas =
[
    {
      titular: "Arlene Barr",
      estaHabilitada: false,
      saldo: "$3,253.40",
      edadTitular: 33,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Roslyn Torres",
      estaHabilitada: false,
      saldo: "$3,229.45",
      edadTitular: 27,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Cleo Lopez",
      estaHabilitada: true,
      saldo: "$1,360.19",
      edadTitular: 34,
      tipoCuenta: "corriente"
    },
    {
      titular: "Daniel Malone",
      estaHabilitada: false,
      saldo: "$3,627.12",
      edadTitular: 30,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Ethel Leon",
      estaHabilitada: true,
      saldo: "$1,616.52",
      edadTitular: 34,
      tipoCuenta: "sueldo"
    },
    {
      titular: "Harding Mitchell",
      estaHabilitada: true,
      saldo: "$1,408.68",
      edadTitular: 25,
      tipoCuenta: "corriente"
    }
  ]

//Obtener un nuevo array de cuentas cuyas edades sean menores a 30.
const cuentasMenos30 = (array) => {
    let cuentasMenos30 = []

    for (let i = 0; i < array.length; i++){
        if (array[i].edadTitular < 30){
            cuentasMenos30.push(array[i])
        }
    } return cuentasMenos30
}
//console.log(cuentasMenos30(arrayCuentas));

//Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a 30.
const cuentas30OMas = (array) => {
    let cuentas30OMas= []

    for (let i = 0; i < array.length; i++){
        if (array[i].edadTitular >= 30){
            cuentas30OMas.push(array[i])
        }
    } return cuentas30OMas
}
//console.log(cuentas30OMas(arrayCuentas));

//Obtener un nuevo array de cuentas cuyas edades sean igual a 30.
const cuentas30 = (array) => {
    let cuentas30 = []

    for (let i = 0; i < array.length; i++){
        if (array[i].edadTitular === 30){
            cuentas30.push(array[i])
        }
    } return cuentas30
}
//console.log(cuentas30(arrayCuentas));

//Obtener la cuenta con el titular de la misma más joven.
const titulasMasJoven = (array) => {
    let titulasMasJoven = array[0]

    for (let i = 1; i < array.length; i++){
        if (titulasMasJoven.edadTitular > array[i].edadTitular){
            titulasMasJoven = array[i]
        }
    } return titulasMasJoven
}
//console.log(titulasMasJoven(arrayCuentas));

//Obtener un nuevo array por cada tipo de cuenta.
const tipoDeCuentas = (array) => {
    let cuentasSueldo = []
    let cuentasCorriente = []

    for (let i = 0; i < array.length; i++)
    
    if (array[i].tipoCuenta == 'sueldo'){
        cuentasSueldo.push(array[i])
    }else if (array[i].tipoCuenta == 'corriente'){
        cuentasCorriente.push(array[i])
    }
    return {
        arrayCuentasSueldo: cuentasSueldo,
        arrayCuentasCorriente: cuentasCorriente
    }
}
//console.log(tipoDeCuentas(arrayCuentas));

//Obtener un nuevo array con las cuentas habilitadas.
const cuentasActivas = (array) => {
    let cuentasActivas = []

    for (let i = 0; i < array.length; i++){
        if (array[i].estaHabilitada){
            cuentasActivas.push(array[i])
        }
    }
    return cuentasActivas
}
//console.log(cuentasActivas(arrayCuentas));

//Obtener un nuevo array con las cuentas deshabilitadas.
const cuentasInactivas = (array) => {
    let cuentasInactivas = []

    for (let i = 0; i < array.length; i++){
        if (array[i].estaHabilitada === false){
            cuentasInactivas.push(array[i])
        }
    }
    return cuentasInactivas
}
//console.log(cuentasInactivas(arrayCuentas));

//Obtener la cuenta con el menor saldo.
const cuentaMenorSaldo = (array) => {
    let cuentaMenorSaldo = array[0]

    for (let i = 1; i < array.length; i++){

        if (cuentaMenorSaldo.saldo > array[i].saldo){
            cuentaMenorSaldo = array[i]
        }
    }
    return cuentaMenorSaldo
}
//console.log(cuentaMenorSaldo(arrayCuentas));

//Obtener la cuenta con el mayor saldo.
const cuentaMayorSaldo = (array) => {
    let cuentaMayorSaldo = array[0]

    for (let i = 1; i < array.length; i++){

        if (cuentaMayorSaldo.saldo < array[i].saldo){
            cuentaMayorSaldo = array[i]
        }
    }
    return cuentaMayorSaldo
}
//console.log(cuentaMayorSaldo(arrayCuentas));


  