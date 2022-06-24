//C18A
//App para control de gastos
let gastosDelMes = [
    [1135, 2500, 900, 1600, 2800, 3650, 1100],
    [1750, 1890, 1900, 1300, 898, 1750, 2800],
    [1700, 1150, 1690, 1900, 1770, 4500, 2560],
    [800, 1250, 1430, 2100, 1980, 1270, 950]
  ];
  //console.table(gastosDelMes);
  
  //Total por semana
  let totalSemana = 0;
  for (let i = 0; i < gastosDelMes.length; i++) {
    totalSemana = 0;
    for (let j = 0; j < gastosDelMes[i].length; j++) {
      totalSemana += gastosDelMes[i][j];
    }
    //console.log(totalSemana);
  }

// Total por dia
let totalDia = 0;
for (let i = 0; i < gastosDelMes.length; i++) {
  totalDia = 0;
  for (let j = 0; j < gastosDelMes[i].length; j++) {
    //console.log('El total de la semana ' + (i + 1) + ' del dia ' + (j + 1) + ' es de: ' + gastosDelMes[i][j] + ' pesos')  
  }
}

//Total por mes
let totalMes = 0;
for (let i = 0; i < gastosDelMes.length; i++) {
  for (let j = 0; j < gastosDelMes[i].length; j++) {
    totalMes += gastosDelMes[i][j];
  }
}
//console.log("El total del mes es de: " + totalMes + " pesos");

//Opcional
//Semana y dia con más gastos
const masCara = (gastos) => {
  let arraySemanas = []
  let semanaMasCara = arraySemanas[0]
  let numeroDeLaSemana = 0
  let diaMasCaro = gastos[numeroDeLaSemana][0]
  let numeroDelDia = 0

  for (let i = 0; i < gastos.length; i++){
    let aux = 0
    for (let j = 0; j < gastos[i].length; j++){
      aux += gastos[i][j]
    }
    arraySemanas.push(aux)
  }
  console.log(arraySemanas);

  for (let u = 0; u < arraySemanas.length; u++){

    if (arraySemanas[0] < arraySemanas[u]){
      semanaMasCara = arraySemanas[u]
      numeroDeLaSemana = u
    }
  } console.log('Semana con más gastos: ' + (numeroDeLaSemana + 1) + ' - Total: ' + semanaMasCara); 

  for (let x = 0; x < gastos[numeroDeLaSemana].length; x++){

    if (diaMasCaro < gastos[numeroDeLaSemana][x]){
      diaMasCaro = gastos[numeroDeLaSemana][x]
      numeroDelDia = x
    }
  } console.log('Día con más gastos: ' + (numeroDelDia + 1) + ' - Total: ' + diaMasCaro);
}
masCara(gastosDelMes) 

//C18S
//Suma los valores que sean mayores o iguales a 10, pero menor a 1000.
let numeros = [
	[10, 3, 2, 1, 4, 7], //10
	[5, 5, 10, 100, 4], //10 100
	[5, 125, 10, 1020, 4], //125 10
	[5, 5, 5097, 100, 4], //100
];

const suma = (matriz) => {
  let suma = 0

  for (let i = 0; i < matriz.length; i++){

    for (let j = 0; j < matriz[i].length; j++){
      let aux = matriz[i][j]
      
      if (aux >= 10 && aux < 1000){
        suma += matriz[i][j]
      }
    }
  }
  return suma
}
console.log(suma(numeros));