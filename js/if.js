// Simple de if

if (condicion){
    // código a ejecutar
}


// Compuesta else
if (condicion) {
    // código
} else {
    // código
}

// Compuesta else if

if (condicion) {
    // código
}else if (condicion2){
    // cóodigo
}else {
    // código

}

// Ejemplo de if

let edad = 19;
let acceso = "";

if (edad >=0 && edad <16) {
    acceso = "Acceso prohibido";
} else if (edad >= 16 && edad <=17){
    acceso ="Acceso permitido con adulto responsable";
} 
else if(edad >=18 && edad <=100){
    acceso="Permitido el ingreso" //La opción a mostrar
}

else {
    acceso="El dato ingresado es invalido"
}

console.log(acceso)

// if ternario
// condicion , si es verdadera se ejecuta la primera expresión
condicion ? primeraExpresion : segundaExpresion
(edad >=18 && edad <=100) ?  acceso="Permitido el ingreso" : acceso = "Acceso prohibido"

4 < 10 ? "Pefecto el 4 es menor" : "El 10 es más mayor";

// switch
switch (expresion){
    case valorA :
        // código a ejecutar si la expresión es igual a valorA
        break;
    
        case valorz :
        // código a ejecutar si la expresión es igual a valorB
        break;
}

// ejemplo Switch edad
let edadSwitch = 7;

switch (edadSwitch) {
    case 10:
        console.log("Tienes 10 años")
        break;
    case 5:
        console.log("Tiene 5 años")
        break;
    default:
        console.log("El dato ingresado no es permitido para la aplicación")
}

// ejemplo Switch fruta
let fruta = "kiwi";

switch (fruta) {
    case "manzana":
        console.log("La manzana es la fruta para la vida eterna")
        break;
    case "pera" :
        console.log("La pera es la fruta del hombre")
        break;
    default: 
    console.log (`La fruta ${fruta} aún no la tenemos en nuestro catalogo saludable`)
}
