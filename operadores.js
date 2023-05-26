/*
Operadores

Los operadores nos permiten realizar una operacion en uno o varios operandos (variables o datos)


-Operadores de asignacion
-Operadores de cadena
-Operadores logicos
-Operadores de comparacion
-Operadores aritmeticos 


Operadores de asignacion (=)
Los operadores de asignacion (=) se utilizan para asignarle valor a una variable. Signa un valor a operando de la izquierda basado en el valor del operador de la derecha. 

*/

//Operadores de asignacion

let edadFelipe = 31;
var recipiente = "cafe";

/*

Operadores de comparacion (>, <, >=, <=, ==, ===, !=, !==)

Los operadores de comparacion nos ayudan a comparar dos expresiones o valores y nos devuelven un valor boolean que representa la relacion de sus valores. 

*/

let numero1 = 13;
let numero2 = 25; 
let numero3 = "25";

//Operador menor que
console.log("El valor 13 es menor que el valor 25 " + (numero1 < numero2));

//Operador mayor que
console.log("El valor 13 es menor que el valor 25 " + (numero1 > numero2));

//Operador mayor o igual que
console.log("El valor 25 es mayor o igual que el valor 25 " + (numero2 <= numero3));

//Operador de Igualdad
console.log("El valor 25 es igual que el valor 25 " + (numero2 == numero3));

//Operador de igualdad estricta (evalua el valor y evalua el tipo de dato)
console.log("El valor 25 es igual que el valor 25 " + (numero2 === numero3));

//Otro ejemplo de operador de igualdad estricta
console.log("El valor 25 es igual que el valor 25 " + (25 === "numero3"));

//Operador de desigualdad (!=)
console.log("El valor 13 no es igual que el valor 25 " + (numero1 != numero2));


//Operador de desigualiad estricta (!==)
console.log("El valor 25 no es es igual que el valor 25 " + (numero2 !== numero3));

/*

Operadores Logicos (&& (and), || (or), !(not))

Los operadores logicos nos devuelven un resultado a partir de que se cumpla (o no) una condicion. El resultado sera un valor boolean y sus operadores son logicos o asimilables entre ellos (Los podemos combinar, y, los podemos poner en un orden especifico.)


AND (&&)

Sirve para determinar si dos expresiones son verdaderas. 
    -Si ambas expresiones son verdaderas, el resultado es verdadero.
    -Si una de las dos expresiones es falsa, todo el resultado es falso. 


OR(||)
Sire para determinar si dos expresiones son falsas.
    -Si cualquiera de esas afirmaciones es verdadera, todo es verdadero.
    -Si las dos afirmaciones son falsas, todo es falso.


NOT (!)
Sirve para mostrar lo contrario a lo que estamos devolviendo.



*/

//Ejemplo con AND (&&)
var num1 = 12;
var num2 = 24;

afirmacion1 = (num1 > num2); //false
afirmacion2 = (num1 != num2); //True

console.log(afirmacion1 && afirmacion2); //Imprime true porque ambas afirmcaciones son verdaderas. 

//Ejemplo con OR (||)


afirmacion3 = (num1 < num2); //True
afirmacion4 = (num1 !== num2); // True

console.log(afirmacion3 || afirmacion4); //true porque al menos una afirmacion es verdadera. 


//Ejemplo con NOT (!)

console.log(!afirmacion3);
console.log(!afirmacion4);

//Ejercicio de combiacion de operaciones
num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

console.log(op);


//Combinando operaciones2



op1 = (num5 > num2 && num4 < num3) || (!(num1 === num2) || num3 != num3);
        //True   &&     False      ||      !(False)    ||        False
        //        False            ||        True      ||      False
        //        False            ||                 True 
        //                         True

console.log(op1);


/*

Operadores aritmeticos (+,-, *, /, %) 

    + (suma): suma dos o valores numericos
    - (resta): resta dos o mas valores numericos 
      (multiplicacion): multiplica dos o mas valores numericos. 
    / (division): divide dos o mas valores numericos
    % (modulo o residuo): retorna el residuo de una divison
    ** (esponenciacion): Retorna el resultado de una potencia. Se escribe la base antes de los asteriscos, y el exponente despues de los asteriscos. 
    ++ (incremento): incrementa un valor de uno en uno
    -- (decremento): decrementa un valor de uno en uno.

*/

let valor1 = 55;
let valor2 = 17;

// la + concatena o suma, dependiendo del contexto
//Para las operaciones, para poder concatener poner , 
// ( ) para que no se concatene 

console.log("Suma: " , (valor1 + valor2));
console.log("Resta: " , (valor1 - valor2));
console.log("Multiplicacion: " , (valor1 * valor2));
console.log("Division: " , (valor1 / valor2));
console.log("Residuo: " , (valor1 % valor2));
console.log("Exponenciacion: " , (valor1 ** valor2));
console.log("Incremento: " , (++valor1));
console.log("Incremento: " , (--valor2));

console.log(valor1);



/*4.El IMC resulta de la división de la masa del individuo (en kilogramos) entre el cuadrado de la estatura (en metros). El índice de masa corporal es un indicador del peso de una persona en relación con su altura.
Clasificación del IMC de acuerdo con la OMS de la ONU:
(a)	Menor a 16: Criterio de ingreso.
(b)	16 a 16.9: infrapeso.
(c)	17 a 18.4: bajo peso.
(d)	18.5 a 24.9: peso normal.
(e)	25 a 29.9: sobrepeso.
(f)	30 a 34.9: obesidad premórbida.
(g)	40 a 45: obesidad mórbida.
(h)	Mayor a 45: obesidad hipermórbida.
 
Escriba un programa que dado el peso de una persona en libras (1 libra = 0.453592 Kg) y su estatura en centímetros, calcule su IMC e indique como salida el peso en kilogramos, el valor de IMC de la persona y la categoría en la cual fue clasificado.
*/


console.log("Ejercico 4")

//Pedir los datos al usuario 
let altura = prompt("Digite su altura en centimetros: ");
let peso = prompt("Digite su peso en libras: ");


//Function para calcular el IMC
//Parametros = peso y altura
function calcularIMC(peso, altura){
    //Convercion peso a Kilogramos
    peso *= 0.453592;
    //Conversion de CM a M
    altura /= 100;
    //Formula para calcular el IMC
    resultado = peso / (altura * altura);
    return resultado;
}

//Declarar la variable imc y asignarle la funcion de calcularIMC
let imc = calcularIMC(peso, altura);

let estadoIMC = '';

//(a)	Menor a 16: Criterio de ingreso.
if (imc < 16){
    estadoIMC = 'Criterio de ingreso';
//(b)	16 a 16.9: infrapeso.    
}else if(imc > 16 && imc < 16.9){
    estadoIMC = 'Infrapeso';
//(c)	17 a 18.4: bajo peso.
}else if(imc > 17 && imc < 18.4){
    estadoIMC = 'Bajo Peso';
//(d)	18.5 a 24.9: peso normal.    
}else if(imc > 18.5 && imc < 24.9){
    estadoIMC = 'Peso normal';
}
//(e)	25 a 29.9: sobrepeso.
else if(imc > 25 && imc < 29.9){
    estadoIMC = 'Sobrepeso';
}
//(f)	30 a 34.9: obesidad premórbida.
else if(imc > 30 && imc < 34.9){
    estadoIMC = 'obesidad premórbida.';
}
// Obesidad grave
else if(imc > 35 && imc < 39.9){
    estadoIMC = 'obesidad Grave.';
}
//(g)	40 a 45: obesidad mórbida.
else if(imc > 40 && imc < 45){
    estadoIMC = 'obesidad mórbida';
}
//(h)	Mayor a 45: obesidad hipermórbida.             
else{
    estadoIMC = 'obesidad hipermórbida';
}             


//Imprimir el resultado en Consola
console.log("Su IMC es:", imc, estadoIMC);