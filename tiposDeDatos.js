console.log(typeof(true));  //Boolean
console.log(typeof(false));  //Boolean
console.log(typeof(0));  //number
console.log(typeof(1));  //number
console.log(typeof("0"));  //String
console.log(typeof("000"));  //String
console.log(typeof("1"));  //String
console.log(typeof(Nan));  //Undefined
console.log(typeof(Infinity));  //Number
console.log(typeof(-Infinity));  //Number
console.log(typeof(""));  //String
console.log(typeof("20"));  //String
console.log(typeof("Twenty"));  //String
console.log(typeof(null));  //object
console.log(typeof(undefined));  //undefined


/* console.log("Ejercicio 2");

//Numero de items
nPayasos = 27;
nMunnecas = 14;

//Peso de los items (gr)
pesoPayaso = 112;
pesoMunneca = 75;


//total = peso Payasos + peso muñecas

pesoTotalPayasos = nPayasos * pesoPayaso;
pesoTotalMunneca = nMunnecas * pesoMunneca;

//Obtener el peso del paquete
pesoTotalDelPaquete = pesoTotalPayasos + pesoTotalMunneca;

console.log("El peso total del paquete es: " + pesoTotalDelPaquete + " gramos"); */


console.log("Ejercicio 2 Actualizado");

//Inicializar el Prompt
var nPayasos = prompt("Ingresa la cantidad de payasos: ");
var nMunnecas = prompt("Ingresa la cantidad de munecas: ");

//Declaracion de variables
const pesoPayaso = 112;
const pesoMunneca = 75;

//Funcion para calcular el peso Total del Paquete
function pesoTotalDelPaquete(nPayasos, nMunnecas, pesoPayaso, pesoMunneca){
    //Realizar las operaciones
    let pesoTotalPayasos = nPayasos * pesoPayaso;
    let pesoTotalMunneca = nMunnecas * pesoMunneca;
    //Calcular el pesoTotal
    let pesoTotal = pesoTotalPayasos + pesoTotalMunneca;
    //Imprimir en Consola
    console.log("El peso total es: " + pesoTotal + " gramos");
//Invocar la función 
}pesoTotalDelPaquete(nPayasos, nMunnecas, pesoPayaso, pesoMunneca);
