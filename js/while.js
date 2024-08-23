// do
//   expresión
// while (condición);

// while(condicion){
//     // código
//     // Algo que haga que se detenga
// }

// let vuelta = 1;

// while(vuelta <=5){
//     console.log(`Dando la vuelta ${vuelta}`)
//     vuelta++
// }

// let i = 0; 
// do { 
//     i += 1; 
//     console.log(i); } 
//     while (i < 5);

function serieFibonacci (numero) {
    let x = 0, y = 1, almacenar;
    console.log(x)

    while(y<=numero){
        console.log(y);
        almacenar = x + y;
        x = y;
        y = almacenar;
    }
}