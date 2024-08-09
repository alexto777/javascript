//De asignación: Asignar el valor de la derecha  en la variable de la izq.

let edad; //Inicializar variable
edad = 35; //asignar el valor

let edad2 = 36; //Inicializo + asigno un valor

edad = 37; //Reasignando el valor
edad2 = 38;

//Aritméticos: nos permiten hacer operaciones aritméticas o  matemáticas y van a devolver el resultado de la operación.
10 + 10 // Suma 20
10 - 10 // Resta 0
10 * 10 // multiplicación 100
10 / 10 // División 1

15++ // Incremento, 15 + 1 = 16
15-- // Decremento, 15 - 1 = 14
15 % 5 // Módulo, el resto de dividir  15 entre 5 = 0

//De concatenació: nos van a servir para concatenar cadenas de textos (string).
let nombre = "Alex";
let apellido = "Castañeda";
let nombreCompleto = "Me llamo " + nombre + " " + apellido; // Me llamo Alex Castañeda

//De comparación simple: comparar dos valores, devuelve true o false

10 == 15 // Igualdad: false
10 != 15 // Desigualdad: true
10 = "10" // True

//De comparación estricta: comparar el valor y el tipo del dato
10 === "10" // false
10 !== 15 // true 

// Comparación: >, <, >=, <=
15 > 15 // false
15 >= 15 //true
10 < 15 // true
10 <= 15 // true 


//Comparar cadenas de texto

"Javascript" === "Javascript" //true
"JavaScript" === "Javascript" //false
"Javascript" !== "Java" // true

//Operadores lógicos AND &&
true && true // true
true && false //false
false && false // false

// Operador lógico OR ||
true || true // true
true || false // true
false || false // false 

//Operador lógico NOT
!true // false
!false // true

//Combinar operadores

2 < 3 && 3 < 4 // true
2 < 3 && 3 < 2 // false

2 < 3 || 3 < 4 // true
2 < 3 || 3 < 2 // true
2 < 1 || 3 < 2 //false


