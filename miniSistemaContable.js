//Ejercicio de una Mini Sistema Contable
/*
-5 instancias (# empleados)
-parametros (nombre, edad, RFC, # dias trabajados)
-ISR(Decuento): 31%
-Sueldo x dia = $156.78
-Calcular sueldo x15, x30 (brutos y netos)

**Calcular sueldo
**Imprimir info de mi empleado 
*/

class sistemaContble{
    //1. - Propiedades
    nombre = "";
    edad = 0;
    rfc = "";
    numDiaTrabajados = 0;

    //2. - Constructor
    constructor(nombre, edad, rfc, numDiaTrabajados){
        this.nombre = nombre;
        this.edad = edad;
        this.rfc = rfc;
        this.numDiaTrabajados = numDiaTrabajados;
    }


    //3. - Metodos
    imprimirInfo(){
        console.log("El nombre del empleado es: ", this.nombre);
        console.log("La edad del empleado es: ", this.edad);
        console.log("El RFC del empleado es: ", this.rfc);
        console.log("El numero de dias trabajados del empleado es: ", this.numDiaTrabajados);

    }
    
    calcularSueldo(){
        //Declaración de las variables a utilizar 
        let sueldoPorDia = 156.78;
        let isr = 0.31;
        
        //Si el empleado trabajo 14 dias o menos 
        if(this.numDiaTrabajados >=1 && this.numDiaTrabajados <= 14){
            //Las operaciones para calcular el salario bruto 
            let salarioBrutoQuincenal = sueldoPorDia * this.numDiaTrabajados * 2;
            //Las operaciones para calcular el salario neto 
            let salarioNetoQuincenal = salarioBrutoQuincenal - (salarioBrutoQuincenal * isr);
            //Imprimir en consola
            console.log("El Salario Bruto Quincenal es: ", salarioBrutoQuincenal.toFixed(2));
            console.log("El Salario Neto Quincenal es: ", salarioNetoQuincenal.toFixed(2));

         //Si el empleado trabajo 14 dias o hasta 30 dias    
        }else if(this.numDiaTrabajados > 14 && this.numDiaTrabajados < 30 ){
            //Las operaciones para calcular el salario bruto 
            let salarioBrutoMensual = sueldoPorDia * this.numDiaTrabajados * 4;
            //Las operaciones para calcular el salario neto 
            let salarioNetoMensual = salarioBrutoMensual - (salarioBrutoMensual * isr);
            //Imprimir en consola
            console.log("El Salario Bruto es: ", salarioBrutoMensual.toFixed(2));
            console.log("El Salrio Neto es: ", salarioNetoMensual.toFixed(2));

         //Si el empleado trabajo mas de 30 dias 
        }else if(this.numDiaTrabajados >= 30){
            //Las operaciones para calcular el salario bruto 
            let salarioBrutoMensual = sueldoPorDia * this.numDiaTrabajados * 4;
            //Las operaciones para calcular el salario neto 
            let salarioNetoMensual = salarioBrutoMensual - (salarioBrutoMensual * isr);
            //Imprimir en consola
            console.log("El Salario Bruto Mensual es: ", salarioBrutoMensual.toFixed(2));
            console.log("El Salario Neto Mensual es: ", salarioNetoMensual.toFixed(2));

        }
    }

}


//Instanciar
//1 Empleado 
let juan = new sistemaContble("Juan", 30, "TOJ8732GJS1", 7);
juan.imprimirInfo();
juan.calcularSueldo();
console.log("*********************************************");

//2 Empleado
let carla = new sistemaContble("Carla", 28, "PDR249541", 14);
carla.imprimirInfo();
carla.calcularSueldo();
console.log("*********************************************");

//3 Empleado
let pamela = new sistemaContble("Pamela", 35, "KJP2H384921", 30);
pamela.imprimirInfo();
pamela.calcularSueldo();
console.log("*********************************************");

//4 Empleado
let erick = new sistemaContble("Erick", 25, "JUE83948G1", 7);
erick.imprimirInfo();
erick.calcularSueldo();
console.log("*********************************************");

//5 Empleado
let lola = new sistemaContble("Lola", 38, "LKLE83930G1", 15);
lola.imprimirInfo();
lola.calcularSueldo();
