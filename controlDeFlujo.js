/*
Control de Flujo

Cuando hablamos de flujo de control hablamos del orden en que se ejecutan las instrucciones de un programa, siendo estas instrucciones las que determinan o controlan dicho flujo.

En un programa, a menos que el flujo de control se vea modificado por una instruccion de control (por ejemplo una condicional), el flujo de control se mantiene en el mismo orden en el que se escriben las instrucciones (de arriba a abajo y de izquierda a derecha).


Condicionales

Son estructuras o condiciones que nos permiten modificar el order natural de ejecucuio de neustro programa. Son sentencias espeficicas que nos ayudara a decidir si una condicion se cumple o no (verdadero o falso), a partir de esta respuesta se ejecuta una o varias instrucciones.


ejemplo:

Tengo limpia mi playera de la suerte?  //Pregunta o instruccion que detona la condicion
    true: Entonces voy a la fiesta //respuesta con su posible instruccion
    false: Entonces me quedo a mimir //respuesta con su posible instruccion

*/


/*Condicional if (si)

If nos sirve para validar si una condición se cumple o no. Si se cumple, entonces se ejecuta el bloque de código que esté dentro del if. Si no se cumple, entonces no se ejecuta ningún bloque de código.


Estructura basica de un if


if (condicion){
    //Ejecuto este bloque de codigo
}


*/

//Felipe tiene 17 anios y quiere ir a una fiesta. Dicha fiesta solo es para personas adultos (mayores de 18 anios). Ayuda a Felipe decidir si puede ir a la fiesta o no. 


//Evaluamos solo una expresion (Si Felipe tiene menos de 18 anios), en caso de que sea verdadero, mostraremos el mensaje dentro del bloque. Si es falso, no mostrara nada porque neustro programa no esta preparado para esa situacion (incertidumbre)

let edadFelipe = 17; //Debemos tomar en cuenta primero la edad de Felipe.

if (edadFelipe < 18) {
    console.log("No puedes ir la fiesta");
}




//if-else (de otro modo - si no)
/*
Utilizamos esta instruccion o sentencia para especificar que un bloque de codigo se ejecutora si la condicion es verdara, y otro bloque de codigo se ejecuta en caso de que la condicion sea falsa. 


if (condition) {
    /Este bloque se ejecuta si la condicion es verdadera. 
    
} else {
    /Este bloque se ejecuta si la condicion es falsa.
}

*/ 

//Ejemplo

/* let edad = prompt("Ingresa tu edad"); //Debemos tomar en cuenta primero la edad de Felipe.
let edadParaEntrarALaFiesta = 18;


if (edad < edadParaEntrarALaFiesta) {
    /Se ejecuta cuando es verdaro (Que Axel es menor a la edad permitido)
    console.log("Lo siento, no puedes entrar a la fiesta");
    
} else {
    /Se ejecuta cuando es falso (que Axel es mayor a la edad permitida)
    console.log("Felicidades, tienes la edad permitida para entrar a la fiesta");
    
}
 */

//Test de nuestro programa (valores que tambien se evaluan como falsos)

/*
    -"false" (String)
    -Nan
    -false (boolean)
    -true (boolean)


*/ 


/*Else if (ademas si / si no entonces)

Enta condicional nos ayuda a ejecutar una nueva condicion en caso de que la primera sea falsa. Podemos usar todas las estructuras else if que sean necesarias, terminando con una estrucutra else. 


Estructura basica del else if


if (condicion 1) {
    //bloque de codigo que se ejecuta si la condicion 1 es verdadera
} else if (condicion 2){
    //bloque de codigo que se ejecuta si la condicion 1 es falsa y la condicion 2 es verdadera
} else if (condicion 3){
    //bloque de codigo se ejecuta si la condicon 1 es falsa, y si la condicon 2 tambien es falsa
}else{
    //bloque de codigo que se ejecuta si la condicion 1, 2 y 3 son falsas.
}

Se pueden anidar x cantidad de else if entre el if que evalua la condicion inicial y el else que termina toda la expresion. 

*/


/* let hora = prompt("Ingrese la hora actual");

if(hora < 12){
    console.log("Buenos dias");
}else if(hora <= 19){
    console.log("Buenas tardes ya, que barbaro como pase el tiempo");
}else{
    console.log("Buenas noches, vamos a mimir");
}
 */



/* Switch

Esta condicional nos permite hacer multiples operaciones y tomar decisiones en funcion de distintos estados de las variables.

Evalua una expresion comparando el valor de un dato o variable, y ejecutando la instruccion asociada a ese caso.

-case: Evalua el caso o condicion asociado que dispara un bloque de codigo.
-break: Termina el proceso sin que tengamos que pasar por tdas las iteraciones o casos.
- default: Termina el proceso en caso de que ninguna de las evaluaciones sea la correcta (similar al else) 


switch (expresion o condicion){
    case valor1:
        /Codigo que se ejecuta si la condicion es igual a valor1. 
    break;

    case valor2:
        /Codigo que se ejecuta si la condicion es igual a valor2
    break;

    case valor3:
        /Codigo que se ejecuta si la condicion es igual a valor3
    break;

    case valor4:
        /Codigo que se ejecuta si la condicion es igual a valor4
    break;

    case valor5:
        /Codigo que se ejecuta si la condicion es igual a valor5
    break;

    default:
        /Ingresaste un piso incorrecto (un bloque de codigo que se ejecuta si no se cumple con ninguna de las condiciones anteriores)
}


*/ 


//Ejemplo de Switch
let pisoDestino = prompt("Ingresa el piso al que quieras ir (1 al 5) ");

switch(pisoDestino){
    //Para jugar con nuestros casos, el tipo de dato debe coincidir para que se ejecute correctamente.

    case "1":
        console.log("Vamos a piso 1 (suena musica de elevador de fondo) ");
        break;

    case "2":
        console.log("Vamos a piso 2 (suena musica de elevador de fondo) ");
        break;

    case "3":
        console.log("Vamos a piso 3 (suena musica de elevador de fondo) ");
        break; 
    
    case "4":
        console.log("Vamos a piso 4 (suena musica de elevador de fondo) ");
        break;  

    case "5":
        console.log("Vamos a piso 5 (suena musica de elevador de fondo) ");
        break;

    default:
        console.log("Ingresaste un piso que no es valido ");
        break;
}

