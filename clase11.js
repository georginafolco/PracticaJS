let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];

  let banco = {
      clientes: [{
        nroCuenta: 5486273622,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 27771,
        titularCuenta: "Abigael Natte",
      },
      {
        nroCuenta: 1183971869,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 8675,
        titularCuenta: "Ramon Connell",
      },
      {
        nroCuenta: 9582019689,
        tipoDeCuenta: "Caja de Ahorro",
        saldoEnPesos: 27363,
        titularCuenta: "Mauro Mossuz",
      },
      {
        nroCuenta: 1761924656,
        tipoDeCuenta: "Cuenta Corriente",
        saldoEnPesos: 32415,
        titularCuenta: "Ansel Ardley",
      },
      {
        nroCuenta: 7401971607,
        tipoDeCuenta: "Cuenta Unica",
        saldoEnPesos: 18789,
        titularCuenta: "Jacki Shurmer",
      }],
      extraccion: function(titular, monto){
        let total = 0;
        for (i = 0; i < banco.clientes.length; i++){
            let aux = banco.clientes[i].titularCuenta;
            if (aux === titular){
                total = banco.clientes[i].saldoEnPesos -= monto
            }
        }if (total < 0){ return "Fondos insuficientes"}
        else { return 'Extracción realizada correctamente, su nuevo saldo es: ' + total;  
    }        
      },
      deposito: function(titular, cantDinero){
          let total = 0;
          for (i = 0; i < banco.clientes.length; i++){
              let aux = banco.clientes[i].titularCuenta;
              if (aux === titular){
                  total = banco.clientes[i].saldoEnPesos += cantDinero
              }
          }return 'Depósito realizado, su nuevo saldo es: ' + total; 
      },
      consultarCliente: function(titular){
          for (i = 0; i < banco.clientes.length; i++){
              let aux = banco.clientes[i].titularCuenta;
              if (aux === titular){
                  return banco.clientes[i]
              }
          }
      },
  };

console.log(banco.consultarCliente("Mauro Mossuz"));
console.log(banco.deposito("Mauro Mossuz", 500000));
console.log(banco);
console.log(banco.extraccion("Mauro Mossuz", 500000)); 


let array = [ 
  { nombre: 'Lean', 
    edad: 27 }, 
  { nombre: 'Eze', 
    edad: 49} 
];

function propiedadUnica (array, propiedad){
  let nuevoArray = [];

  for (let i = 0; i < array.length; i++) {
      let elemento = array[i][propiedad]
      console.log(elemento);
      nuevoArray.push({propiedad: elemento})
    }return nuevoArray
  };
console.log(propiedadUnica(array, "nombre"));

console.log(array[0].nombre); 

let alumno = {
  nombre: 'Ana',
  legajo: 13099,
  notas: [10, 9, 8, 7, 10],
  promedio: function() {
    let suma = 0;
    for (let i = 0; i < this.notas.length; i++){suma += this.notas[i];} 
    return  suma / this.notas.length;
    },
  estado: function() {return this.promedio() >= 7 ? 'aprobado': 'desaprobado'},
  };
console.log(alumno.promedio());
console.log(alumno.estado()); 

console.log('EJ 4 - duplicados');
const duplicado = array => {
    let edadRepetida = []
    for (let i = 0; i < array.length; i++) {
        const edad = array[i];
        if(edadRepetida.includes(edad)) return true 
        edadRepetida.push(edad)
    }
    return false
}
console.log(duplicado([1,2,3,4,5,6,7,8,9]));
console.log(duplicado([1,2,3,4,5,6,7,8,8]));