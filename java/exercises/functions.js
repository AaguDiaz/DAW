/*a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
dicha variable en la consola del navegador.*/

var num1 = 5;
var num2 = 6;

function suma(a,b){
    return a+b;

}

var resultado = suma(num1,num2); 
console.log(resultado);


/*b. A la función suma anterior, agregarle una validación para controlar si alguno de
los parámetros no es un número, mostrar una alerta aclarando que uno de los
parámetros tiene error y retornar el valor NaN como resultado.*/

var nonum = "hola";

function ifNaN(num){
    if(isNaN(num)){
        console.log("Uno de los parametros no es un numero");
        return NaN;
    }else{
        return num;
    }
}

suma(ifNaN(num1),ifNaN(nonum));

/*c. Crear una función validate integer que reciba un número como parámetro y
devuelva verdadero si es un número entero.*/

function validateInteger(num){
    if(Number.isInteger(num)){
        return true;
    }else{
        return false;
    }
}

console.log(validateInteger(5.5));
console.log(validateInteger(5));

/*d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los
números sean enteros. En caso que haya decimales mostrar un alerta con el
error y retorna el número convertido a entero (redondeado).*/

console.log(ifNaN(validateInteger(2),validateInteger(2.1)));

/*e. Convertir la validación del ejercicio 6d) en una función separada y llamarla
dentro de la función suma probando que todo siga funcionando igual.*/

function validateInteger(num){
    if(Number.isInteger(num)){
        return true;
    }else{
        return false;
    }
}

function suma(a,b){
    if(validateInteger(a) && validateInteger(b)){
        return a+b;
    }else{
        console.log("Uno de los parametros no es un numero entero");
        return Math.round(a) + Math.round(b);
    }
}

console.log(suma(2,2.1));