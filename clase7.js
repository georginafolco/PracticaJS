const prompt = require("prompt-sync")({ sigint: true });

//EJERCICIO 1 - Acceso
let edad = Number(prompt('Ingresá tu edad: '))

if (edad < 0) {
    console.log('Error, edad inválida. Por favor ingrese un número válido');
}else if(edad === 21){
    console.log('Bienvenido y felicitaciones! Ya sos mayor!');
}else if(edad%2 != 0){
    console.log('¿Sabias que tu edad es impar?');
};


//EJERCICIO 2 - Total a pagar segun vehiculo y litros consumidos
function totalAPagar (vehiculo, litrosConsumidos){
    let precioPorLitro;

    if(vehiculo = 'coche'){
        precioPorLitro = 86
    }else if(vehiculo = 'moto'){
        precioPorLitro = 70
    }else if(vehiculo = 'autobus'){
        precioPorLitro = 55
    }

    if (litrosConsumidos > 0 && litrosConsumidos < 25){
        return (litrosConsumidos * precioPorLitro + 50)
    }else if (litrosConsumidos >= 25){
        return (litrosConsumidos * precioPorLitro + 25)
    }

}
console.log('El total a pagar es de $' + totalAPagar('moto', 25));


//EJERCICIO 3 - Calculadora precio sandwich

function precioSandwich (base, pan, adicional){
    let precioBase
    let precioPan
    let precioAdicional

switch(base){
        case 'pollo':
            precioBase = 150
            break
        case 'carne':
            precioBase = 200
            break    
        case 'veggie':
            precioBase = 100   
            break 
    };

switch(pan){
        case 'blanco':
            precioPan = 50
            break
        case 'negro':
            precioPan = 60
            break
        case 'sin gluten':
            precioPan = 75
            break
    }

switch(adicional){
    case 'queso':
        precioAdicional = 20
        break
    case 'tomate':
    case 'cebolla':
        precioAdicional = 15
        break
    case 'lechuga':
        precioAdicional = 10
        break
    case 'mayonesa':
    case 'mostaza':
        precioAdicional = 5
        break
}

return precioBase + precioPan + precioAdicional

}

console.log(precioSandwich('carne', 'blanco', 'mayonesa'));

//EJERCICIO 4 - Paracaidas

function abrirParacaidas(velocidad, altura){
    if (velocidad < 1000 && altura >= 2000 && altura <3000){
        return 'El paracaidas puede abrirse'
    }else{
        return 'No es seguro abrir el paracaidas en este momento'
    }
}

console.log(abrirParacaidas(800, 1800))


//EJERCICIO 5 - Traductor

let stringUno = 'perro'

switch(stringUno){
    case 'perro':
        console.log('dog');
        break
    case 'casa':
        console.log('house');
        break
    case 'pelota':
        console.log('ball');
        break
    case 'genio':
        console.log('genius');
        break
    case 'arbol':
        console.log('tree');
        break
    default:
        console.log('La palabra ingresada es incorrecta');
    }

 
//EJERCICIO 6 - Valoración de peliculas

let valoracion = 'muy mala'

switch(valoracion){
    case 'muy mala':
        console.log('Calificaste la película como Muy Mala. Lo lamentamos mucho');
        break;
    case 'mala':
        console.log('Calificaste la película como Mala. Lo lamentamos mucho');
        break;
    case 'mediocre':
        console.log('Calificaste la película como Mediocre. Lo lamentamos mucho');
        break;
    case 'buena':
        console.log('Calificaste la película como Buena. Nos alegramos mucho');
        break;
    case 'muy buena':
        console.log('Calificaste la película como Muy Buena. Nos alegramos mucho');
        break;
    default:
        console.log('Ingresaste un valor inválido');
}


