let nombre = "Alex";

nombre[2]; //e

//.length
let miSerie = "The Chosen";
miSerie.length; // 10

//.indexOf()
let saludo = "¡Hola! Estamos programando";

saludo.indexOf("Estamos"); // 7
saludo.indexOf("vamos"); // -1
saludo.indexOf("o"); // 2

//.slice()
let frase = "The Chosen";

frase.slice(4, 9); // "Chosen"
frase.slice(4); // "Chosen"

//.trim()
let nombreCompleto = "       Homero Simpson";
nombreCompleto.trim(); // "Homero Simpson"

nombreCompleto = "   Homero    J.     Simpson   ";
nombreCompleto.trim(); // "Homero    J.     Simpson"

//.replace()
let aprende = "Aprendiendo Python";
aprende.replace("Python", "Js"); // "Aprendiendo Js"
aprende.replace("Py", "JS"); // "Aprendiendo JSthon"

//.split()
let nombreCancion = "En la ciudad de la furia";
nombreCancion.split(" "); // ["En", "la", "ciudad", "de", "la", "furia"]
