const alicia = [ 10, 80, 75 ];
const bob = [ 90, 20, 25 ];

let concurso = {
    etapas:[],
    encontrarGanador:function(a, b){
        let puntosPrimerParticipante = 0;
        let puntosSegundoParticipante = 0;
    
        for (let i = 0; i <= a.length; i++) {
            
            if (a[i] > b[i]) {
                puntosPrimerParticipante += 1
                this.etapas.push('primerParticipante')
            }else if (b[i] > a[i]){
                puntosSegundoParticipante += 1
                this.etapas.push('segundoParticipante')
            }
        } if (puntosPrimerParticipante > puntosSegundoParticipante){
            return this.ganador = 'Primer participante'
        }else if ((puntosSegundoParticipante > puntosPrimerParticipante)){
            return this.ganador = 'Segundo participante'
        }else if (puntosPrimerParticipante === puntosSegundoParticipante) {
            return this.ganador = ' '
        }
    },
    ganador: 'x',
};
concurso.encontrarGanador(alicia, bob);
console.log(concurso.etapas);
console.log(concurso.ganador); 


function digitalHouse(num1, num2){
    for (let i = 1; i <= 100; i++){
    if (num1%i === 0 && num2%i !== 0){
        console.log('Digital');
    }else if (num2%i !== 0 && num1%i !== 0){
        console.log('House');
    }else if (num1%i === 0 && num2%i === 0){
        console.log('Digital House');
    }    
}
}
digitalHouse(10, 5); 

function sumArray (array){
    let total = 0;
    for (let i = 0; i <= array.length - 1; i++){
        total += array[i]
    };
        return total 
         
    };
console.log(sumArray([10, 25, 39, 47]));

function join(stringArray){
    let palabra = ' ';

    for (let i = 0; i <= stringArray.length - 1; i++){
        palabra += stringArray[i]
    };
        return palabra
};
console.log(join(['H', 'O', 'L', 'A']));

