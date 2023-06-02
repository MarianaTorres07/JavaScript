//Traer o referenciar todos los elementos del HTML y los vamos a guardar en variable para poder utilizarlas después.

//Metodos de Seleccion

let numeroContador = document.getElementById("numeroContador");
let botonIncrementar = document.getElementById("botonIncrementar");
let botonDecrementar = document.getElementById("botonDecrementar");
let botonResetear = document.querySelector("#botonResetear");
let memeRandom = document.querySelector("#memeRandom");


//Declarar una variable con un estado inicial
var valorContador = 0;

//Logica de negocio (funciones)

function incrementar(){
    valorContador++;
    numeroContador.innerHTML = valorContador;

    //1si el valor de mi contador es igual a 10, entonces se ejecuta mostrar Imagen
    if (valorContador === 10 || valorContador ===20){
        mostrarImagen();
    }

}

//Funcion de decrementar 
function decrementar(){
    valorContador--;
    numeroContador.innerHTML = valorContador;

    //1si el valor de mi contador es igual a 10, entonces se ejecuta mostrar Imagen
    if (valorContador === 10 || valorContador ===20){
        mostrarImagen();
    }

}


//Funcion de Resetear
function resetear(){
    valorContador = 0;
    numeroContador.innerHTML = valorContador;

}


//Funcion para mostrar la imagen 

//La intencion de esta funcion es que cuando sea invocada, recorra el arreglo y tome uno de los elementos de forma aleatorio. (index)
function mostrarImagen(){
    var coleccionImagenes = ["./assets/meme1.png", "./assets/meme2.png", "./assets/meme3.png", "./assets/meme4.png"];

    //Generar un indice aleatorio
     let indexRandom = Math.floor(Math.random()* coleccionImagenes.length);

     //Obtener la URL o direccion de la imagen
     let urlAleatoria = coleccionImagenes[indexRandom];
 
     //Agrego la URL al atributo src que deje vacio en el HTML
     memeRandom.src = urlAleatoria;
     //Cambio la propiedad de visualizacion (display) a un block
     memeRandom.style.display = "block"; 
 }

 //Eventos en los botones

 botonIncrementar.addEventListener("click", incrementar);
 botonDecrementar.addEventListener("click", decrementar);
 botonResetear.addEventListener("click", resetear);