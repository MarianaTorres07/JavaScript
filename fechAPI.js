//JavaScript Sincrono
//Necesito que la primera tarea se cumpla primero (terminar la tarea) antes de iniciar con la siguente tarea

console.log("Inicia Sincrono"); //Se ejecuta esta linea primero
function dosSync(){
    console.log("Se ejecuta la funcion dos");
} //No se ejecuta hasta que se invoque.

function unoSync(){
    console.log("Se ejecuta la funcion uno");
    dosSync();  //Hasta aqui se ejecuta la funcion dosSync
    console.log("Se ejecuta el codigo tres");

}unoSync(); //Lo segundo que se ejecuta.


console.log("Fin de Sincrono");


/*
Ejemplos de tareas sincronas
    -ciclos
    -Inovaciones a funciones
    -EventListener(especificamente cuando necesito el click)
    -Condicionales y todo lo que tenga que ver con toma de deciones
    -Prompts y Alerts
*/



//JavaScript Asincrono
//No espera para hacer la ejecucion
console.log("Inicio de Asincrono");

function dosAsync(){
    setTimeout(function(){
        console.log("Dos");
    }, 5000);  //tiempo es en milisegundos (5Segundos)
}

function unoAsync(){
    dosAsync();
    console.log("Tres");

}unoAsync();

console.log("Fin de Asincrono");

/*
Ejemplos de tareas Asincronas
    -Funcion setTimeout
    -Notificaciones de cierre de sesion en apps bancarias
    -Spotify con su cola de reproduccion
    -Conexiones a servidor
    -Cargas de APIs
*/


/*

Ya que entendemos que la asincronia nos servira para conectarnos a un servidor, y sin importar la respuesta que este nos de (exitosa o no), o incluso el tiempo que tarde en responder (milisegundos o segundos), es necesario saber que hay varios mecanismos para manejar operaciones asincronas en JS.

    -Callbacks (llamadas de vuelta): La forma mas clasica de gestionar la asincronia

    -Promises (promesas): forma modera

    -Async/Await: forma moderna con una sintaxis mas ligera

*/

/*

Que es un callback (llamada de vuelta)

Un callback es una funcion que se pasa como argumento a otra funcion. Esta funcion se ejecutara despues de que la otra lo haga. Este mecanismo nos ayuda a controlarar que cierto codigo no se ejecute antes de que el otro termine.

Para que las necesitamos?
Sabemos que JS trabaja de forma descendente, entonces habra casos que quramos hacer que un codigo se ejecute despues de que ocurra otra cosa, y tambien de forma no secuencial.
*/

//Sincrono Ejemplo
// function hazClic(){
//     console.log("Le hiciste clic al boton");
// }

// const boton = document.getElementById("boton");
// boton.addEventListener("click", hazClic);
        //callback


//Ejemplo de Callback

//Defino una funcion que toma un numero y un callback(function) como parametros

//Callback es una funcion, que se usa en un parametro y se invoca asi mismo, pero depende de otra funcion para poder ejecutarse

//Creamos una funcion llamada dobleNumero, que toma un numero y un callback como argumentos (2l callback es una funcion)
function dobleNumero (num, callback){
    const resultado = num * 2; //operacion comun y corriente
    callback(resultado); //invocacion de ese callback con el resultado como parametro.
}

//Definir una funcion para mostrar el resultado
function mostrarResultado(resultado){
    console.log("El resultado es: ", resultado);
}

dobleNumero(5, mostrarResultado);

/*

Promises (promesas)

Son otro mecanismo para manejar la asincronia. Utilizar promesas hace que el codigo sea mas legible y practico que el usar callbacks, y como su nombre lo indica una promesa es algo que en un principio no sabemos si se va a cumplir, pero en el futuro pueden pasar varias cosas. La gran ventaja de utilizar promesas es que evitamos anidar muchas funciones, y usamos una sola funcion (metodo) para manejar los callbacks.

NOTA: Las promesas son objetos

promise.then

promise.catch

Las promesas tienen estados:

    - Pendiene (pending): Es el estado inicial de nuestra promesa, aqui aun no tenemos resultados.

    - Fullfiled: Cuando la operacion asincrona se completa con exito (resolve)

    - Rejected (rechazo): Cuando la operacion falla (reject)

Tambien las promesas, al ser un objeto, tienen metodos

    - then(function resolve): Ejecuta un callback llamado resolve cuando la promesa se cumple.

    - catch(function reject): Ejecuta un callback llamado reject cuando la promesa se rechaza.

    - then(resolve, reject): Puedo ejecutar las dos funciones en el mismo metodo then.

*/

//Crear una funcion llamada obtenerProductos para utilizar promesas y hacer la conexion a mi url para obtener datos
function obtenerProductos(){
    //cuando se ejecute la funcion, quiero que retorne un nuevo objeto del tipo promesa
    //Especifico que este objeto promise tiene dos funciones: una cuando se resuelve, y otra cuando se rechaza
    return new Promise(function(resolve,reject){ //el objeto maneja dos funciones (resuelto, rechazo)
        fetch ('https://fakestoreapi.com/products') //direccion a donde me voy a conectar y buscar
        .then(function(response){ //espero respuestas...
            if (response.ok){ //Propieadad booleana (si o no hay respuesta)
                return response.json(); //metodo para convertir la respuesta a un objeto .json
            }else{ //si no...
                throw new Error("Error al obtener los productos. Error 404! Servidor no encontrado"); //lanzo un error (404)
            }
        })
        .then(function(data){ //Si hay una respuesta, resuelvo la promesa (exitosa) y ya tengo mis datos para jugar con ellos
            resolve(data);
        })
        .catch(function(error){ //Si no hay una respuesta, resuelvo con un rechazo
            reject(error);
        });
    });
};


// Uso de la promesa

obtenerProductos()
    .then(function(resultado){
        console.log(resultado);
})

    .catch(function(error){
    console.log(error);
})


//Otro ejemplo de promesa para validar un nombre. Si el nombre que estoy evaulando coincide con un valor ya guardado previemante, etnonces la promesa se resuelve correctamente. Si no, la promesa se rechaza y me muestra mensaje de error.

let nombre = "Felipe";

//que el objeto promesa tiene dos posibles soluciones (mesero)
const promesaNombre = new Promise(function(resolve, reject){
    if (nombre !== "Felipe"){ //si el nombre es distino de Felipe
        reject ("Error!!, el nombre no es Felipe"); //etnonces rechaza la promesa
    }else{ //si no...
        resolve("Que bien!, el nombre es correcto " + nombre); //resuelve la promesa e imprime un dato

    }

});

console.log(promesaNombre);


/* Ejemplo de la PokeAPI

Necesito

    - URL
    - Promesa (Con dos posibles caminos reject y resolve)
        -Si se resuelve me traigo los datos de API
        -si no, muestro un error
*/

//Primer bloque para la xonexion del servidor
const obtenerPokemon = new Promise((resolve, reject) => {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')


    .then(respuesta =>{ //Cuando se conecte....
        if (respuesta.ok){ //si la conexion es ok
            return respuesta.json();  //guardo el dato en formato .json
        } else{
            throw new Error ("Error 404"); //muestro un error
        }
    })


    //segundo bloque (cuando ya me conecte al servidor)
    .then(datos =>{ //entonces esos datos...
        resolve(datos); //se usan como parametros de mi resolve.
    })


    //tercer bloque (solo en caso de que no se encuentra informacion)
    .catch(error =>{
        reject("Mensaje de error, no encontramos tu pokemon" + error);
    }); //Solo las ultimas llevan ; porque si o si todo el bloque tiene que ejecutarse.
});


//Ya que le di el mensaje a mi mesero (creacion de la promesa), ahora voy a poder mostrar la informacion si la promesa se resuelve (enecuentra la info), o si se rechaza (no encuentra la info)

obtenerPokemon
.then(pokemon =>{ //el valor pokemon = datos obtenidos del servidor .json
    console.log("Pokemon obtenido", pokemon.name)
})
.catch(error =>{
    console.log(error);
})

//Las funciones desglosados:

// function data (respuesta, callback){
//     respuesta = respuesta.ok //true
//     callback(respuesta);
// }

// function pokemon (datos, callback){
//     respuesta.json;
//     callback (datos);
// }

// function error (error, callback){
//     error = "Error, no encontramos al pokemon";
//     callback(error);
// }


//Arreglo con objetos  : Tener un JS con tu base de datos ...
// const baseDaDatos = [
//     {
//         objeto1
//     }

//     {
//         objeto2
//     }
// ]

//y luego utilizar el fetch para tu base de datos


/*
Fetch API

Es una interfaz de JS, que nos da un metodo llamado fetch, el cual nos permite manejar solicituedes HTTP (GET, POST, PUT, DELETE).

Cuando usamos Fetch API sabemos que de forma implicita estamos usando promeas, tambien de forma implicita sabemos que es promesa se puede resolver o rechazar.

El metodo fetch toma una URL como argumento y devuelve una promesa que se resuelve como un objeto llamado "response", que incluye la respuesta de la solicicitud (a aprte de decirnos que la conexion es ok, "pega" la informacion de lo que estamos consultando).

Ya que tenemos el objeto llamado "response", vamos a poder hacer un monton de cosas como acceder a la info, leer el contenido, verificarlo, etc. 

*/


//realiazamos la peticion al servidor
fetch ('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(pokeRespuesta =>{ //cuando la promesa se resuelve, ejecutamos esta funcnion
        return pokeRespuesta.json(); //esta funcion retorna la pokeInfo en un .json
    })
    .then(pokeInfo => { //cuando la promesa de la conexion se resuelve, entonce ejecutamos esta otra funcion. Esta funcion guarda la informacion de la respuesta, y lo guarda en una nueva variable llamada pokeInfo.

        //Uso esa variable para hacer mucha cosas
        console.log("El nombre del pokemon es: " , pokeInfo.name, " su numero de la pokedex es: ", pokeInfo.order)
        console.log(pokeInfo);
    })  
    .catch(pokeError => {
        console.log("No encontramos anda de informacion" + pokeError);
    });


    // pokeRespuesta = respuestaServidor.json

    //pokeInfo = pokeRespuesta;



const input = document.getElementById("inputPokemon");
const button = document.getElementById("botonPokemon");
const pokemonContainer = document.querySelector("#pokemonContainer"); 

button.addEventListener("click", (e) => {
    e.preventDefault(); //prevenir que el navegador se actualice
    traerPokemon(input.value); //ejecuta la funcion traerPokemon
}
);

//Manipulacion del DOM + Fetch API    

function traerPokemon(nombrePokemon){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)

    //guardo la respuesta en .json
    .then(respuesta => respuesta.json()) //Se resuelve la promesa

    //ese .json lo asigno a una variable llamada datos, que usare para alimentar una funcion llamada crearPokemon
    .then((datos) =>{
        crearPokemon(datos);
    });
}


function crearPokemon(nombrePokemon){
    const pokeImg = document.createElement("img") //creo una etiqueta img
    pokeImg.src =nombrePokemon.sprites.front_default; //front_dafult es el nombre de la propiedad donde esta la imagen de mi pokemon


    const h2= document.createElement("h2"); //creo una etiqueta h2
    h2.innerHTML = nombrePokemon.name; //Le pongo el nombre del pokemon a ese h2.

    const pokeDiv = document.createElement("div"); //crearmos un div para poner

    //Inserto los elementos imagen y h2 a un div particular de cada pokemon
    pokeDiv.appendChild(pokeImg);
    pokeDiv.appendChild(h2);

    //inserto ese div particular en un div general que estan en el html
    pokemonContainer.appendChild(pokeDiv);


}