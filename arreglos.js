/* Arreglos (arrays, matrices, colleciones de datos)

En JavaScript, un array es un objeto. Esto porque es un elemento especial que tiene propiedades y métodos propios de los objetos. Además, al ser un objeto, puede ser accedido principalmente mediante índices numéricos (claves). 

Es importante mencionar que aunque los arrays sean un objeto, éstos están diseñados específicamente para almacenar y manipular conjuntos ordenados de datos. Los arrays ofrecen características y funcionalidades específicas para trabajar con elementos indexados numéricamente, lo que los distingue de los objetos regulares en JavaScript.




*/

//Formas de dclarar un array o arreglo

//1. Usando los corchetes []

var miArray = [1,2,3,4,5,6];

//Variable sin iniciarlizar
var colores;

//Arreglo sin asignar a una variable
["azul", "rojo", "Naranja", "Verde"];

//Variable colores declarada e inicializada
var colores = ["azul", "rojo", "Naranja", "Verde", ["Verde Pastel", "Amarillo Pastel", "Rosa Pastel"]];


//Podemos tener distintos tipos de datos en un mismo arreglo
var datosDeFelipe = ["Felipe",31, "Guadalajra", "Nikky", true, undefined, null];



//Cada asignatura esta asociada a una variable individual

var asignatura1 = "Matematicas";
var asignatura2 = "Literatura";
var asignatura3= "Fisica";


//Array
var asignaturas = ["Matematicas", "Literatura", "Fisica"];

console.log(typeof(asignaturas));

//Acceso a elementos de un arreglo


//Si accedemos a un elemento que no existe, nos mostrara undefined porque si espacio existe pero no tiene ningun valor. 
console.log("El elemento en la posicion 2 de mis asignaturas es: ", asignaturas[10]);

//Mostrar la longitued de mi arreglo.
console.log(asignaturas.length);
            //nombre    //Método (función)
            //objeto / array


//Metodo para agregar elementos al final de un arreglo
asignaturas.push("Biologia");
console.log(asignaturas);
            
asignaturas.push("Inglés");
console.log(asignaturas);

//Metodo para eliminar el ultimo elemento de un arreglo
asignaturas.pop();
console.log(asignaturas);


//Metodo para agregar elementos al principio de un arreglo
asignaturas.unshift("Quimica");
console.log(asignaturas);


//Metodo para eliminar elementos del principio de un arreglo
asignaturas.shift();
console.log(asignaturas);


//Ejemplos de array 

//Array carrito de compras

var carrito = ["pantalon", "camisa", "corbata"];


//usuario", cantidadLikes, "fecha de publicacion
var publicacion = ["Felipe", 137, "29-Mayo-2023"];

console.log(publicacion);

//Modificar los elementos dentro del arrays

//Reasignamos el valor a un elemento de nuestro arreglo por medio de su index.
publicacion[1] = 138;

console.log(publicacion);


//No teniamos un elemento en la posicion (index) 4 (indefinido = 150)
// Mala practica, publicacion[4] = 150;



//Metodo para saber si mi arreglo incluye un elemento especifico

let carritoDeWalmart = ["Gansitos", "Coquita", "Galletas Marias", "Mazapan"];

regalo = carritoDeWalmart.includes("Coquita");

if (regalo === true){
    console.log("Te regalo un sarten");
}


var amigos = ["Felipe", "Mariana", "Fernanda", "Maara", "Gaby", "Marina"];

var mejoresAmigos;

var publico;


if(!amigos){
    console.log("Mi meme de bob esponja");
}



//Metodo para concatener arreglos

var listaDeGolosinas = ["Gansitos", "Coquita", "Galletaas Marias", "Mazapan"];

var listaDeFrutitasYVerduritas = ["manzanas", "mangos", "toronjas", "platanos", "fresas"];

var listaDeComprasDeLaQuicena = listaDeGolosinas.concat(listaDeFrutitasYVerduritas);

console.log(listaDeComprasDeLaQuicena);


//Metodo para buscar un elemento en un arreglo y devolver el indice de su primera aparacion. Si el elemento no se encuentra, retorna -1.

//Solo el primero que encuentre
console.log(listaDeComprasDeLaQuicena.indexOf("toronjas"));

console.log(listaDeComprasDeLaQuicena.indexOf("Chicharrones"));


console.log("Resumen de compra");
//Metodo para unir elementos de un arreglo en una cadena de texto

console.log(listaDeComprasDeLaQuicena.join('\n'));


//Reverse, Sort, toString, Splice

var verduras = ["Cebolla", "Perejil", "Tomate", "Calabaza", "Brocoli"];
console.log(verduras);

//Reverse
//Coloca los elementos del arreglo al revés. Este método altera el arreglo original.
console.log("Reverse");
verduras.reverse();
console.log(verduras);

//Sort
//Ordena la lista de forma ascendente (A-Z) por defecto
console.log("Sort");
verduras.sort();
console.log(verduras);

//Splice
//Sirve para aregar o borrar elementos de un arreglo. Pide como parámetros el index y un número de elementos a borrar. Splice modifica el arreglo original.
//verduras.splice(2,0,"Pepino", "Limon");
//console.log(verduras);

//Retorna los elementos borrados(si hubiese).
verduras.splice(0, 1);
//console.log(verduras);

//toString()convierte una matriz en una cadena de valores de matriz (separados por comas).
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

console.log("toString");
fruits.toString();
console.log(fruits);


//Modificacion del arreglo (push, pop, shift, unshift, splice)

//Acceso y busqueda de elementos (indexOf, LastIndexOf, includes)

//Transformacion de elementos (sort, reverse, map, forEach)

//Operaciones logicos (every, some)

//Creacion de nuevos arreglos (slice, concat, join, reverse)

let precios = [100, 54, 67, 45];

function descuento(){
    //codigo para aplicar descuento
}

let preciosConDescuento = []


//Splice (agregar, eliminar o reemplazar elementos en posiciones especificos)

/*Sintaxis del splica
    array.splice(iniciamos, numeroElementosABorrar, ElementoAinsertar, ElementoAInsertar);

*/

//Caso de uso: En el super, comprar más productos (Recorrimiento) # de elementos que quieres, modificar
//Splice para borrar elementos
var abcedario = ["A", "B", "C", "D", "E"]; //Borrar C y D

abcedario.splice(2,2);
console.log(abcedario);

//Splice para insertar elementos

abcedario.splice(2,0, "C", "D");
console.log(abcedario);

//Splice para reemplazar elementos del arreglo
var vocales = ["A", "E", "I", "O", "U"]; //Reemplazar E, I

vocales.splice(1, 2, "comer", "comer", "comer"); //
console.log(vocales);



