// for (incio; condicion; modificador) {
//     //Código a ejecutar
// }
// Iterar desde el 1 hasta el 5
for (let vuelta = 1; vuelta <=5; vuelta++) {
    console.log(`Estamos iterando del 1 al 5 ${vuelta}`)
}

//for in
let persona = {
    nombre: "Alex",
    edad: 36
}
for (let dato in persona){
    console.log(dato, persona[dato])
}

// for of
let artistas = ["Juan Molina", "Carlos Vives", "Shakira"]
for (let artista of artistas){
    console.log(artista)
}