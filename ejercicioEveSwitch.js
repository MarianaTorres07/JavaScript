//Ejercicio de Evee

//Pedir al usuario que ingrese un elemento que quiera evolucionar su pokemon,
 var elementoEvolucion = prompt("Ingresa el elemento con el que evolucioras a tu pokemon");
//Los elementos a escoger
 console.log("Elemento a escoger: \n 1. Fire \n 2. Electric  \n 3. Water \n 4. Dark \n 5. Psychic \n 6. Grass \n 7. Ice \n 8. Fairy")


//En el Switch va la variable en la cual se va evaular la respuesta del usuario. 
switch(elementoEvolucion){
    //Los 8 elementos en cada case y su respectivo break. 
    //El tipo de dato debe coincidir para que se ejecute correctamente.
    case "1":
        console.log("Elegiste el elemento de Fire. Felicidades se evolucionara en Flareon.");
    break;

    case "2":
        console.log("Elegiste el elemento de Electric. Felicidades se evolucionara en Jolteon.");
    break;

    case "3":
        console.log("Elegiste el elemento de Water. Felicidades se evolucionara en Vaporeon.");
    break;

    case "4":
        console.log("Elegiste el elemento de Dark. Felicidades se evolucionara en Umbreon.");
    break;

    case "5":
        console.log("Elegiste la elemento de Psychic. Felicidades se evolucionara en Espeon.");
    break;

    case "6":
        console.log("Elegiste el elemento de Grass. Felicidades se evolucionara en Leafeon.");
    break;

    case "7":
        console.log("Elegiste el elemento de Ice. Felicidades se evolucionara en Glaceon.");
    break;

    case "8":
        console.log("Elegiste la elemento de Fairy. Felicidades se evolucionara en Sylveon.");
    break;
    //Si el usuario ingresa un numero equivocado. 
    default:
        //...Le saldra el siguiente mensaje. 
        console.log("Elegiste un numero incorrecto. \n Vuelve interarlo de nuevo.");
    break;    
} 

