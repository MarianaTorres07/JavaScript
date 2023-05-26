//9.Escriba un programa que dados la distancia recorrida por un objeto y el tiempo que tomó el objeto en recorrer esa distancia, calcule su velocidad.

//Declarar la fnción
function Velocidad(distancia, tiempo){
    //Operación, Formula de Velocidad
    resultado = distancia / tiempo;
    //Imprimir en Pantalla
    console.log("La velocidad es: " + resultado + " m/s");

//Invocar la función 
} Velocidad(10, 5);



//10.Escriba un programa que reciba como entrada los coeficientes A, B y C de una ecuación de segundo grado, e imprima por pantalla los valores de x. Asuma que la ecuación siempre tiene solución en número reales. Recuerde que la solución de una ecuación de segundo viene dada por:
//Declarar la fnción
var a = prompt("Ingresa un numero: ");
var b = prompt("Ingresa el otro numero: ");
var c = prompt("Ingresa el otro numero: ");


//Una forma
function formulaGeneralCuadratica(a,b,c){
    const squareRoot = Math.sqrt((Math.pow(b,2)) - (4*a*c));

    //Formula con +
    let xUno = (-b + squareRoot) / (2*a);
    //Formula con -
    let xDos = (-b - squareRoot) / (2*a);

    //Imprimir los resultados
    console.log("el valor de x1 es: " + xUno);
    console.log("el valor de x2 es: " + xDos);
   

//Invocar la función 
}formulaGeneralCuadratica(a,b,c);




//Otra forma
function formulaGeneral(a,b,c){
    const squareRoot = Math.sqrt((Math.pow(b,2)) - (4*a*c));

    //Formula con +
    xUno = (-b + squareRoot) / (2*a);
    //Formula con -
    xDos = (-b - squareRoot) / (2*a);

    //Imprimir los resultados
    console.log("el valor de x1 es: " + xUno);
    console.log("el valor de x2 es: " + xDos);
   

//Invocar la función 
}formulaGeneral(1, 2, -8);