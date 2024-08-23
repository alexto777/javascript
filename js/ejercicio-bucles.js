// // Ejercicio 1
// function valorParametro(num){
//     for (let numero = 1; numero <11; numero++){
//         console.log(num + numero)
// }
// }

// Ejercicio 2
// function imprimirDeTresEnTres() {
//     for (let numero = 5; numero<=20; numero+=3){
//         console.log(numero)
//     }
// }

// Ejercicio 3

// function sumarHasta100(){
//     let sumatoria = 0;

//     for (let i=1; i<=100; i++){
//         sumatoria +=i;
//     }
//     return sumatoria;
// }


// Ejercicio 4

// function factorial(num){
//     let resultado = 1;
//     for (let i=1; i<=num; i++){
//         resultado*=i;
//     }
//     return resultado;
// }

// console.log(factorial(1))

// Ejercicio 5

function FibonacciSerie(numero){
    if (numero === 0) {
        return []
    }
    if (numero === 1) {
        return [0]
    }
    if (numero ===2){
        return [0,1]
    }
    
    let fibonacciArray = [0,1]

    for (let i=2; i<numero; i++){
        let ultimoNumero = fibonacciArray[i-1]
        let penultimoNumero = fibonacciArray[i-2]

        fibonacciArray.push(ultimoNumero+penultimoNumero);
    }
    return fibonacciArray;
}

