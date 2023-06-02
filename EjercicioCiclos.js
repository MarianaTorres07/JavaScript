
/*

Programa para calcular numeros enteros


Escribe un programa que pida al usuario un numero entero, y muestre en pantalla si es un numero primo o no.

Que es un numero primo? es un numero mayor que 1, que solo se puede divir entre 1 y entre si mismo. Ejemplos de numeros primos: 2, 3, 5, 7, 11, 13, 17, 19, etc.

Operaciones que necesitaremos: dvision, comparacion, residuo

*/


//1. Solicitamos al usuario un numero entero
var numeroIngresado = prompt("Ingresa un numero entero");


//2. Evaluamos los dos posibles escenarios: sea o no primo (estado inicial de mis numeros)
var esNumeroPrimo = true;


//3. Operacion para demostrar si es o no es primo
if (numeroIngresado <=1) {
    esNumeroPrimo = false; //demuestro que no es primo, y cambio el estado inicial a false


/*Al calcular el numero primo, se tendran que hacer divisiones desde el 2 hasta el numero que definimos (este sera nuestro tope). Como no queremos hacer tantas divisiones, vamos a marcar un tope hasta la mitad del numero ingresado. 
*/

} else {
    let divisor = 2; //Este es nuestro divisor. Lo inicializamos en 0

    //Mientras el divisor sea menor que el dato ingresado (limite) y el numero ingresado tenga un valor como true (que sea un numero primo), comenzaremos a dividir
    while (divisor <= numeroIngresado/2 && esNumeroPrimo){

        //Si al momento de hacer la division el residuo es igual a cero, se entiende que el numero ingresado es un numero par, por lo que el valor inicial se sobreasignara a false y ahi terminamos el proceso.
        if (numeroIngresado % divisor === 0){
            esNumeroPrimo = false; //no es primo
        }

        //En caso de no encontrar un cero como residuo al hacer la division, se incrementara en uno el valor del divisor, y se volvera a hacer la division (recordar que marcamos el tope para estas operaciones en la mitad del numero ingresado) numeroIngresado/2
        divisor ++; //contador que aumenta los divisores de uno en uno
    }
}


//Mostramos los resultados

if (esNumeroPrimo) { //en caso de que el numero ingresado mantenga el estado inicial true
    console.log(numeroIngresado + " es un numero primo.");
} else { //En caso de que el estado inicial haya cambiado a false
    console.log(numeroIngresado + " no es un numero primo.");
}