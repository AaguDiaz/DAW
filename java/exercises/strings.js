/*a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el
texto en mayúscula (utilizar toUpperCase).*/

var texto = "hola como estas";
var textoMayuscula = texto.toUpperCase();
console.log(textoMayuscula);

/*b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los primeros 5 caracteres guardando el resultado en una nueva
variable (utilizar substring).*/

var texto = "hola como estas";
var textoCortado = texto.substring(0,5);
console.log("Cantidad de caracteres: "+textoCortado.length + ". String: " + textoCortado);

/*c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con los últimos 3 caracteres guardando el resultado en una nueva variable
(utilizar substring).*/

var texto = "hola como estas";
var textoCortado = texto.substring(texto.length-3);
console.log("Cantidad de caracteres: "+textoCortado.length + ". String: " + textoCortado);

/*d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo
string con la primera letra en mayúscula y las demás en minúscula. Guardar el
resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y
el operador +).*/

var texto = "hola como estas";
var textoNuevo = texto.substring(0,1).toUpperCase() + texto.substring(1).toLowerCase();
console.log(textoNuevo);

/*e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en
blanco. Encontrar la posición del primer espacio en blanco y guardarla en una
variable (utilizar indexOf).*/

var texto = "hola como estas";
var espacio = texto.indexOf(" ");
console.log(espacio);

/*f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y
algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para
generar un nuevo string que tenga la primera letra de ambas palabras en
mayúscula y las demás letras en minúscula (utilizar indexOf, substring,
toUpperCase, toLowerCase y el operador +).*/

var texto = "Bienvenido elefante";
var espacio = texto.indexOf(" ");
var textoNuevo = texto.substring(0,1).toUpperCase() + texto.substring(1,espacio).toLowerCase() + " " + texto.substring(espacio+1,espacio+2).toUpperCase() + texto.substring(espacio+2).toLowerCase();
console.log(textoNuevo+ " Espacio en el lugar: " + espacio);