//Ejercicio de Horoscopos

let mes = prompt("Ingresa tu mes de nacimiento para ver tu Horoscopo del dia");

switch (mes){

    case "1":
        console.log("Acuario \nNecesitas poner un poco de sal y pimienta en tu relación. Viene siendo demasiado rutinaria. Pon toda tu energía en el tema profesional");
        break;
        
    case "2":
        console.log("Piscis \nDeja  ahora que el amor funcione por inercia.");
        break;
    
    case "3":
        console.log("Aries");
        console.log("Si tu chico se sincera, correspóndele en la misma medida.");
        break;
    
    case "4":
        console.log("Tauro");
        console.log("Nunca pierdas la capacidad de creer en el amor. Alguien nuevo aparecerá muy pronto.");
        break;
            
    case "5":
        console.log("Geminis");
        console.log("Vivirás grandes momentos en el trabajo, Buenas noticias para tu futuro.");
        break;
        
    case "6":
        console.log("Cancer");
        console.log("Si la persona  que ha puesto sus ojos en ti no te interesa, no alimentes sus ilusiones. ");
        break;
        
    case "7":
        console.log("Leo");
        console.log("Escucha  los consejos que te dan, pero haz lo que tu intuición te dicte en cada momento.");
        break;        
            
   case "8":     
        console.log("Virgo");
        console.log("Si tienes pensado volar del nido, piensa también  en las  ventajas que vas a perder. ");
        break;
        
    case "9":    
        console.log("Libra");
        console.log("Harás bien en no querer oír a esa persona de tu pasado, podría acarrearte problemas. ");
        break;
        
    case "10":
        console.log("Escorpio");
        console.log("Presta atención a las señales. La vida siempre nos da pistas cuando necesitamos un cambio.");
        break;
                
    case "11":
        console.log("Sagitario");
        console.log("Buen momento para iniciar una relación, aunque sea algo informal.");
        break;
            
    case "12":
        console.log("Capricornio");
        console.log("Se acerca a tu vida alguien muy especial. Aparecerá simplemente como un amigo.");
        break;
    
     default:
        console.log("Ingresaste tu mes incorrecto");
        break;   
        
}