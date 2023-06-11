/*
Programacion Orientada a Objetos en JavaScript

Paradigma de programacion que nos permite crear soluciones a problems que se nos presentan, tomando como ejemplo los objetos del mundo real. 


Otras formas de programar:
    -Programacion funcional
    -Programacion imperativa
    -Programacion declarativa
*/

//Arreglos (objeto)
var casaArreglo = [3, 2, 1, 4, 2, "Verde" , 6 ,"Rojo"];

//casa[index]; //Normalmente se hace con un arreglo



//Objetos Casa
//Creacion de un objeto casa (atributos)
const casa = {
    numHabitaciones: 3,
    numBanios: 1,
    numPisos: 2,
    color: "Rojo",
};


//Para imprimir la informacion de un objeto, utilizando la referencia al objeto, despues un punto, y por ultimo el nombre de la propiedad o metodo que quiero mostrar
console.log("El color de mi casa es: " , casa.color);


//Instruccion: Crear 50 casas, con la misma estructura pero con colores diferentes

//Clase para generar una plantilla, esta plantilla va a tener predefinidas las llaves (key) de nuestras propiedas, y cada que instancie o cree un nuevo objeto, esa informacion se va a ir personalizado


class casaPlantilla {
    //1. Definir mis propiedades como variables, para posteriormente agregarle valores (este valor se lo vamos a dar cuando instanciemos el objeto)
    numHabitaciones = 0;
    numBanios = 0; 
    numPisos = 0;
    color = "";


    //3. - Definir una funcion constructora. Esta funcion es una funcion especial que se dedica unica y exclusivamente o tomar los datos que definimos como variables, para usarlas como parametros de construccion y asi poder instanciar nuestro objeto. 

    //Los parametros se pasan en el orden en el que fueron declarados, para que cada valor que se use, se asgine a la variable correspondiente
    constructor(numHabitaciones, numBanios, numPisos, color){
        this.numHabitaciones = numHabitaciones;
        this.numBanios = numBanios;
        this.numPisos = numPisos;
        this.color = color;

    }



    //2. - Definimos los metodos como funciones, porque estas funciones nos dicen que es lo que puede hacer mi objeto
    encenderLuces(){
        console.log("Click, luces encendidas");
    }

    abrirVentas(){
        console.log("Swiiift, ventanas abiertas");
    }

    guardameDelFresnito(){
        console.log("Que agusticidad");
    }


}

//En la clase definimos todo de forma "normal" (declaran las variables como normalmente las usamos = y ;, pero cuano el objeto se crea (instancia), se visualiza de otra forma con : y , entre cada valor. )

/*Instaciar objetos 

Para instanciar objetos, usamos la siguiente sintaxis:

variable con nombre = palabraReservadaNew  referenciaDeLaClase (parametros de construccion);

let objeto = new ClaseObjeto (parametros);

*/

//Tengo una variable llamada "casa de Felipe", que es un nuevo objeto de la clase "casa Plantilla" y que tiene los siguientes parametros 
let casaDeFelipe = new casaPlantilla(6, 3, 3, "azul");
console.log(casaDeFelipe);
casaDeFelipe.encenderLuces();
casaDeFelipe.guardameDelFresnito();
console.log(casaDeFelipe.numHabitaciones);

let casaDeGustao = new casaPlantilla(4, 3, 3, "azul");
console.log(casaDeGustao);

let casaDeMiguel = new casaPlantilla(1, 3, 3, "azul");
console.log(casaDeMiguel);

let casaDeAle = new casaPlantilla(7, 3, 3, "azul");
console.log(casaDeAle);

let casaDeDavid = new casaPlantilla(1, 3, 3, "azul");
console.log(casaDeDavid);


//Ejemplo de POO con Gatitos 

class gatitos {

    //1. - Propiedades
    nombre = "";
    edad = 0;
    tamanio = "";
    caracter = "";
    numeroVidas = 0;
    color = "";
    raza = "";
    vacunas = false;

    //3. Constructor
    constructor(nombre, edad, tamanio, caracter, numeroVidas, color, raza, vacunas){
        this.nombre = nombre;
        this.edad = edad;
        this.tamanio = tamanio;
        this.caracter = caracter;
        this.numeroVidas = numeroVidas;
        this.color = color;
        this.raza = raza;
        this.vacunas = vacunas;

    }

    //2. - Metodos
    imprimirInfo(){
        console.log("El nombre de mi gato es: ", this.nombre);
        console.log("La edad de mi gato es: ", this.edad);
        console.log("El tamanio de mi gato es: ", this.tamanio);
        console.log("El numero de vidas de mi gato es: ", this.numeroVidas);
        console.log("El color de mi gato es: ", this.color);
        console.log("El raza de mi gato es: ", this.raza);
    };

    maullar(){
        console.log("Miauuu");
    };

    rasguniar(){
        console.log("El gato ha rasguinando el sillon");
    };

    ronronear(){
        console.log("Rrrrrr");
    };

    cuidarGato(){
        if(this.numeroVidas < 3){
            console.log("Cuidaa a tu gatitio porque tiene pocas vidas!")
        }
    }

}

//Instanciar
let juanchoDelCampo = new gatitos("Juancho del Campo" , 5, "Grande", "Tranquilo", 7, "naranja", "angora", true);

let nenito = new gatitos("Nenito" , 3, "Mediano", "Travieso", 2, "Blanco con naranja", "desconocida", true);

let pakito = new gatitos("Pakito" , 7, "Grande", "Travieso", 7, "Gris", "angora", true);

let coneja = new gatitos("Coneja" , 6, "Mediano", "Tranquila", 7, "Blanco con negro", "desconocida", true);

let perejil = new gatitos("Perejil" , 4, "Pequeño", "Travieso", 7, "Blanco", "desconocida", false);

juanchoDelCampo.imprimirInfo();
juanchoDelCampo.cuidarGato();

nenito.imprimirInfo();
nenito.cuidarGato();

pakito.imprimirInfo();
pakito.cuidarGato();

coneja.imprimirInfo();
coneja.cuidarGato();

perejil.imprimirInfo();
perejil.cuidarGato();



/*
JSON (JavaScript Object Notation)

Es un formato estandar basado en texto (string) para representar datos estructurados (objetos) basados en la sintaxis de objetos de JavaScript ({, :})

JSON es una estructura de datos (mantiene la estructura de un objeto de JS normal), que nos permite guardar datos en forma de objetos. La unica diferencia es que estos datos se guardan en un formato de texto, para poder hacer la comunicaion con nuestro servidor. 

Para poder comunicarnos con un servidor, necesitamos convertir nuestro objeto a un objeto que pueda ser interpretado. 

*/

// Objeto normal de JAVASCRIPT (tiene colores, me muestra las palabra reservadas)
objeto = {
    nombreObjeto: "Felipe",
    edad: 15,
}

console.log ("Este es un objeto normal: ", objeto);
console.log("Este es el nombre de mi objeto: ", objeto.nombreObjeto);


/*Como nuestro servidor no interpreta objetos "puros", necesitamos convertirlos a cadenas de texto. Este proceso se le conoce como serializar

La sintaxis para pasar de objeto normal de JS a JSON es:


JSON.stringify(objeto que quiero serializar)

*/

let objetoSerializado = (JSON.stringify(objeto));

//Podemos imprimir nuestro objeto serializado, y lo veremos como una cadena de texto
console.log("Este es un objeto serializado: ",objetoSerializado);

//Si tratamos de acceder a alguna de las propiedades de nuestro objeto serializado, no podremos ya que nos mostrara "undefined"
console.log(objetoSerializado.nombreObjeto);

//Para deseralizar un objeto JSON, vamos a utilizar un metodo llamado JSON.parse(objeto que queremos deserealizar)
let objetoDeserializado = (JSON.parse(objetoSerializado));
console.log(objetoDeserializado);
console.log(objetoDeserializado.nombreObjeto);