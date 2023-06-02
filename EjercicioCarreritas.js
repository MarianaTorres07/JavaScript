
/* Ejercicio Carreritas
En una carrera se tienen los siguientes corredores con su respectiva posición:

    -Primer lugar: Roberto
    -Segundo lugar: Andrea
    -Tercer lugar: Jorge
    -Cuarto lugar: Ramiro
    -Quinto lugar: Sofia
  
Después de 3 vueltas, Jorge adelanta a Roberto, Ramiero adelanta a Jorge y Roberto se lesiona y sale de la carrera. Además, Andrea baja una poición, Raminero mantine su lugar y el quinto lugar es reemplazado por José.

¿Cómo quedan las posiciones después de esas 3 vueltas?


*/

var corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia"];
//Imprimir los corredores iniciales
console.log(corredores);


// Jorge adelanta a Roberto
//Unshift: Agregar elementos al inicio del Array
corredores.unshift("Jorge"); //Jorge, Roberto, Andrea, Jorge, Ramiero, Sofia 
//Splice: Eliminar en la posición 3, solo 1 elemento. 
corredores.splice(3, 1);     
console.log(corredores);    //Jorge, Roberto, Andrea, Ramiero, Sofia 

// Ramiro adelanta a Jorge
//Unshift: Agregar elementos al inicio del Array
corredores.unshift("Ramiro");//Ramiero, Jorge, Roberto, Andrea, Ramiero, Sofia
 //Splice: Eliminar en la posición 4, solo 1 elemento. 
corredores.splice(4,1);      
console.log(corredores);   //Ramiero, Jorge, Roberto, Andrea, Sofia 

// Roberto se lesiona y sale de la carrera
//Splice: Eliminar en la posición 2, solo 1 elemento. 
corredores.splice(2, 1);
console.log(corredores);  //Ramiero, Jorge, Andrea, Sofia 

// Andrea baja una posición
//Push: Agregar elementos al final del Array
corredores.push("Andrea");  //Ramiero, Jorge, Andrea, Sofia, Andrea
//Splice: Eliminar en la posición 2, solo 1 elemento.  
corredores.splice(2,1);
console.log(corredores);    //Ramiero, Jorge, Sofia, Andrea 

// El quinto lugar es reemplazado por José
//Push: Agregar elementos al final del Array
corredores.push("Jose");  
console.log(corredores); //Ramiero, Jorge, Sofia, Andrea, Jose 

//Resultado FINAL
console.log('Posiciones después de 3 vueltas:', corredores ); //Ramiero, Jorge, Sofia, Andrea, Jose 
