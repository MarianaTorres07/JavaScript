/* Bucles e iteracion

En JS, un bucle es una estructura de control que permite repetir un bloque de instrucciones, o lo que es lo mismo, repetir una tarea tantas veces queramos. Gracias a esto vamos a poder automatizar tareas repetitivas. 


-While (mientras)
-Do While (hacer mientras)
-For (para)



While (mientras)

Este bucle nos sirve para realizar una tarea repetitva, mientras una condicion sea VERDADERA. A diferencia del if, que pregunta una vez y despues ejecuta el bloque de codigo, el while pregunta continuamente la condicion y ejecuta el bloque de codigo hasta que la condicion devuela FALSE.

*/

//Estructura basica de una While

/* while(tenerSuenio && tenerUnaCamita){
    /bloque de codigo 
    /hacer la dormicion
}
 */


//Caso de USO
/*
let rolDeUsuario = "registrado"; //esto ya esta definido


while (!"registrado") { //la evaluacion es sobre el rol
    
    function registrarUsuario(){
        console.log("Usuario Registrado");
    }

}

dejaloComprar();
*/


//Casos de uso del ciclo While
/* 
    E-Commerce
    -Para verificar si un usuario esta registrado o no
    -Verificamos la disponibidad de un producto (stock)
    -Realizar acciones sobre nuestro carrito de compras (revisar productos, aplicar descuentos, impuestos, actualizar informacion, etc.)

    Red Social
    - Recorrer publicaciones de un usaurio
    -Contador de Likes
*/    


//While
//Codigo de mi sopita de verduritas con pollito

//Declaro e inicializo un array con mis ingredientes

var ingredientes = ["zanahorias", "cebollas", "apio", "papa", "espinacas", "pollito"]; //6 elementos

//Decalaramos una variable llamada ingredientesAgregadosALaOlla inicializada en 0 para usarla como un contador. 
var ingredientesAgregadosALaOlla = 0;

//mientras los ingredientes agregados a la olla sean menos que los ingredientes que me quedan disponibles...
while (ingredientesAgregadosALaOlla < ingredientes.length) {
    
    //.. ire agregando ingredientes a la olla
    console.log("Agregando " + ingredientes[ingredientesAgregadosALaOlla] + " a la olla");

    //...y voy aumentando el contador para asber cuando parar. 
    ingredientesAgregadosALaOlla ++;
    
}

console.log("La sopita ya esta lista, yumi");

//Funcion para Imprimir Asteriscos

function imprimirAsteriscos(){
    console.log("***********************");

}imprimirAsteriscos();


//Do -While (hacer mientras)

/*
    Do -While (hacer mientras)

    Es similar al while, con la diferencia de que la condicion se evalua despues de cada iteracion. Esto garantiza que el bloque de codigo se ejecute al menos una vez, incluso si la condicion inical es falsa. 


    do{
        /Bloque de codigo que vamos a ejecutar
    } while (condicion);

*/  

console.log("Ejemplo de Galletitas con Do-While");

//variable tiempo de coccion que servira como contador
var tiempoTranscurridoDeCoccion = 0;

//Usamos el ciclo Do-While
do{
    console.log("Horneando las galletas...");
    tiempoTranscurridoDeCoccion +=5;

//Us Todo el bloque de codigo se va evaluar mientrasel tiempo de coccion sea menor a 30 minutos. Esto es porque las galletas se pueden cocinar en 5, 10, 15, 20, o 25 minutos, teniendo un maximo de 30. Si pasamos de ese tiempo, puede que las galletas se quemas.

//Esto  es como si revisaramos el horno cada 5 minutos
} while(tiempoTranscurridoDeCoccion < 30);

console.log("Las galletas estan listas");


//For (para)

/*
    Se utiliza cuando se conoce el numero exacto de iteraciones que se realizaron. Consiste en tres partes: inicializacion, condicion y expresion final.
    El bloque de codigo se ejecuta mientras la condicion sea verdadera, y despues de cada iteracion se ejecuta la expresion final.

    for(inicializacion; condicion; expresion de iteracion){
        /Bloque de codigo a ejecutar

    - inicializacion: se ejecuta antes de que el bucle comience, y se utiliza para establecer una variable de control (contador)    

    - condicion: se verifica antes de cada iteracion, y se evalua como verdadera, el bucle se ejecuta.

    -Expresion de iteracion: Se ejecuta al final de cada iteracion, y se utiliza para actualizar o modificar la variable de control.

    }
*/

imprimirAsteriscos();
console.log("Ejemplo de la pizza con For");

//Definir mi lista de pasos
var pasosDeReceta = ["Prepar la masa", "Agregar los ingredientes", "Hornear la pizza"]; //3 pasos

//Definir mi lista de tiempo por paso
var tiempoPorPaso = [15, 10, 20];

//En el ciclo for, para cada paso, se tiene un tiempo estimado.

//Para cada paso de la lsita, voy a tomar en cuenta el tiempo que se necesita para hacerlo. Cada que vaya cumpliendo un paso, voy incrementando mi variable paso para saber cuantos pasos me quedan pendientes. Cuando ya no haya pasos, termino el proceso. 
for(var paso=0; paso < pasosDeReceta.length; paso++){
    
    console.log("Realizando paso " + pasosDeReceta[paso]);
    console.log("Esperando " +tiempoPorPaso[paso] + "minutos");
}

console.log("Disfruta tu pizza");


//Ejemplo contador con FOR (contador de cohetes)

for(let i=10; i>0; i--){
    console.log("Faltan " + i + " segundos para el despegue");

}

//Caso de USO
//E-commerce 
//Recorrer una lista de prductos 
//Informes de ventas 
//Ejemplo de for para cupones de descuento

for(let cupones =10-1; cupones>0; cupones--){
    console.log("tienes un cupon de descuento " + cupones);
}