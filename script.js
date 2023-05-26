//alert("Estoy vivooooo!");

//Este es un comentario de una sola linea

/*

Este 

Es 

Un

Comentario

Multilinea

*/

/*
Variables:

Es un elemento del cual su valor puede cambiar o variar dependiendo la circunstancia. Esta variable ocupa un espacio de memoria y dependiendo de de su valor o elemento que este dentro de este espacio, es el tipo de variable que tenemos. 

Variable = recipiente donde pondremos el valor
Valor = la informacion con la que llenamos el recipente

Declarar = Ponerle nombre a nuestro recipiente
Inicializar = Llenar ese recipiente

*/ 

recipiente = "agua";
recipiente = "cafe";
recipiente = "colores y lapices";
recipiente = "leche";

//Usamos esta linea de codigo para imprimir o mostrar la informacion de mi recipiente

console.log(recipiente);

//Declarar vs Inicializar
//edad;
//altura;
//peso;
//Genero;

/*Tipos de datos (primitivos y no primitivos)

Se llaman primitivos porque no son datos que no pueden ser modificados, ya vienen con el lenguaje y se consideran el dato mas simple o mas basico que existe

-String: Sirve para agregar valores en forma de texto. Para que se considere asi, el valor debe estar dentro de comillas simples (' '), dobles("") y backticks(´´)
-Number: Sirve para agregar valores en formato numerico(para poder usarlos en operaciones aritmeticas). Estos valores no usan comillas.
-Boolean: Sirven para representar valores del tipo true o false (encendido o apagado, 0 y 1, si y no).
-Undefined: Sirve para representar un tipo de dato que no tiene valor. Cuando declaramos variables sin inicializar, tendremos datos del tipo undefined. 
-Null: Sirve para definir que un valor es nulo.
-Nan (Not a Number): sirve para representar un valor que no es un numero. Lo obtenemos si hacemos una operacion con una variable que no es un numero o con una operacion que no es posible.
-Symbol
-Object (No es primivito)
*/


//Ejemplo para la concatenacion
apodoFelipe = "El 'amante' uno de los chilaquiles verdes";
console.log(apodoFelipe);

//Ejemplos de valores numericas
edadDeFelpe = 31;
costoDeUnGansito = 18.50;
cuentaDeFelipe = -156.35;

console.log(edadDeFelpe);
console.log(costoDeUnGansito);
console.log(cuentaDeFelipe);

//Ejemplos de valores Booleanos
esAdministrador = true;
contraseniaCorrecta = false;
cuentaPremium = false;

//Ejemplos de datos indefinidos
//respuestaDeMiCrush;
//precioBoletoEstacionamiento;

//console.log(respuestaDeMiCrush);


//Ejemplo de valores nulos
respuestaDeMiCrush = null;
console.log(respuestaDeMiCrush);


//Ejemplo con valores Nan
operacionMatematica = 0/0;
console.log(operacionMatematica);

//TypeOf

/*
Es una expresion que nos ayuda a saber que tipo de dato es el que estamos evaulando
typeof(elDatoAvaular);

/* Todos los resultados que arroja son cadenas con el tipo de dato que estamos evaluando.
*/

console.log(typeof(esAdministrador)); //boolean

console.log(typeof(edadDeFelpe)); //Number

console.log(typeof(operacionMatematica)); //Number


/* Tipos de variables

en JS tenemos 3 tipos prinicpales de variables:

    -var: Era la forma principal de decalar variables. Es una variable muy flexible, tiene un scope(alcance) global, esto es que el valor de esta variable esta dispnible en todo el programa.


    -let: Lo usamos para limitar el alcance de nuestras variables (scope), y si limita a un bloque de codigo a expresion (meter a la mama de bambi en una cajita.), es una variable local.

    -const: Se usan para declarar una variable con un valor constante o inmutable (que no cambia).

*/ 
//En este caso, la mama de Bambi esta visible desde cualquier lugar del programa. 

var mamaDeBabiViva = false;

var cazador = "listo para disparar";
let nombre = "Mariana Torres";
const pi= 3.1416;

console.log(mamaDeBabiViva);

/*
Una function es una agrupacion de instrucciones que se ejecutan cuando se llama o se invoca. Las funciones pueden recibir parametros y devolver valores. Es importante mencionar que las funciones no se ejecutan sino que se invocan.

Parametros = variables que necesitamos para alimentar mi funcion. (todos las variables se tienen que utilizar)

Ejemplo: Limon, azucar, vasito de agua, cucharita, hielos, agua.


Nombre para la funcion = Con el nombre, nosotros vamos a poder activar o invocar la funcion (basicamente, tenemos que llamarla para que funcione)

Ejemplo: preparAguitaDeLimon

Operaciones: Conjunto de instrucciones (en orden especifico)

Ejemplo: 1) Cortar el limon, 2) Exprimir el limon, etc.

Resultado: Las funciones generalmente deben tener un resultado.
Ejemplo: Vasito de aguita de limon

*/ 

//1 - Creamos la funcion con la palabra reservada function y le ponemos un nombre, Despues, abriremos parentesis y cerramos parentisis y abrimos y cerramos llaves {}. Los parentsis son para nuestros parametros o argumentos, y las llaves para delimitar el bloque o la funcion. 

//2. Ponemos nuestros parametros (variables) dentro de los parentesis

//3 - Poner las instrucciones dentro de las llaves, utilizando los parametros o argumentos.

//4 - Invocar la funcion escribiendo su nombre y abrimos y cerramos parentesis. 


let limon = "limon";
let agua = "agua";
let hielos = "hielos";
let azucar = "azucar";
let vaso = "vaso";
let cuchara = "cuchara";





function preparAguitaDeLimon(limon, agua, hielos, azucar, vaso, cuchara){



    console.log("Cortar el limon " + limon);
    console.log("Exprimir el limon ");
    console.log("Agregar el jugo de limon al vaso " + vaso);
    console.log("Agregemos el agua al vaso " + agua);
    console.log("Agregamos los hielos al vaso " + hielos);
    console.log("Endulzamos al gusto " + azucar);
    console.log("Mezclar y disfrutar " + cuchara);
    console.log("Que rica aguita de limon");

}


preparAguitaDeLimon();

//Ejemplo de las 3 formas de agregar parametros a funciones

//Primera forma: usando parametros dentro de  parentesis e inicializando dentro de la funcion.

function suma(a, b){ //Valores estan en undefined

    //Inicializo 
    a = 5; //cambio el undefined por 5
    b = 7; //cambio el undefined por el 7

    operacion = a + b; //hago mi suma utilizando los dos valores
    console.log(operacion); //imprimir mi operacion

} suma(); //invocamos la funcion



//Segunda forma: Usando parametros dentro de parentisis, ya inicializados.
function resta(a=8, b=5){

    operacion = a - b;
    console.log(operacion);

} resta();


//Tercera forma: Inicializando valores dentro de la invocacion 
function multiplicacion (a,b){

    operacion = a * b;
    console.log(operacion);

}multiplicacion(5, 7);
multiplicacion(13, 9);
multiplicacion(36, 97);
multiplicacion(11, 80);
multiplicacion(10, 3);
multiplicacion(13, ); //Se imprime NaN porque nos falta un parametros


//Funciones anonimas 
//Operaciones rápidas 
let funcionAnonima = function (a,b){
    operacion = a / b;
    console.log(operacion);
}

funcionAnonima(10, 5);



//Return
//Funcion para dar un saludo personalizado 
//Se puede utilizar en carrito de compras para dar una promoción a un usuario. 
//Si tienes x cantidad comprado, darle una promoción.


//Primer defino mi funcion
function Saludo(){

    //declaro e inicializo mi valor del nombre
    let nombreSaludo = "Felipe";

    //Uso ese nombre para personalizar mi saludo
    console.log("Hola " + nombreSaludo + ", que bueno que usas nuestra aplicacion");

    //Finalizo la ejecucion de mi funcion, y tomo el dato de la variable llamada nombreSaludo para poder verla (recordemos que esta es un contexto local) y tambien para poder usarla depues en otras operaciones
    return nombreSaludo; //Limbo de las variables
}

let nombreQueSaqueDeMiFuncion = Saludo();

console.log("Estas son las personas que han iniciado sesion en mi aplicacion "+ nombreQueSaqueDeMiFuncion);
//Fin 

//PROMPTS 
var nombreIngresadoDesdeElNavegador = prompt("Introduce tu nombre ");

console.log("Gracias por entrar a mi pagina " + nombreIngresadoDesdeElNavegador);

