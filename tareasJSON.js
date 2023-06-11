//1. Creamos un areglo de objetos para nuestras de tareas, estas tareas tendran atributos como id, titulo, estatus completada o no completada. 

//Esto donde se ejecuta? Del lado del cliente

let tareas = [ //Areglos
    {  //Objetos 
        id: 1,
        titulo: "Baniar al perro",
        estatus: true,
    }
    ,
    {//Objetos 
        id: 2,
        titulo: "Preparar la comida",
        estatus: false,
    }
]

//Enviar ese arreglo al servidor 
let tareasJSON = JSON.stringify(tareas);
console.log(tareasJSON);


//Ejemplo del carrito de compras

//Declaramos un arreglo de objetos vacio 

let carritoDeCompras = [];

//Producto de mi catalogo
let producto = {
    id: 1,
    nombre: "Camisa de Pokemon",
    precio: 299.99,
    cantidad: 1
};

//Mostrar informacion del carrito de compras
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); // 0 Productos

//Agregar un nuevo producto a mi carrito de compras 
carritoDeCompras.push(producto);

//Muestro la nueva informacion de mi carrito 
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //1 Producto


//Actualizar la cantidad de productos en el carrito
let idProductoAModificar = 1; //Producto a actualizar
let nuevaCantidad = 3; //cantidad nueva de productos que voy a comprar 

//Verificio si mi producto existe dentro del carrito de compras para poder modificarlo, si existe, actualizo la cantidad, si no, no hago nada. Todo esto se evalua con base en el id que estoy buscando y este debe coincidir con el id del producto que deberia tener dentro de mi carrito de compras. 
let productoExiste = carritoDeCompras.find(function(producto){
    return producto.id === idProductoAModificar; //true or false
})

if (productoExiste){
    productoExiste.cantidad = nuevaCantidad;
}

console.log(producto);


//Con funcion flecha
// let productoExiste = carritoDeCompras.find(producto => idProductoAModificar === producto.id);

//Sin funcion flecha
// carritoDeCompras.find(function(producto){
//     return producto.id === idProductoAModificar; //true or false 
// })


//Eliminar un producto del carrito
let productoAEliminar = 1;  //valor que quiero borrar

//Reviso el id del producto a eliminar en cada uno de llos indices de mi arreglo, si encuentro un indice que dentro trnga un objeto que coincida con el id que quiero borrar, etnonces lo elimino. 
let indiceProductoAEliminar = carritoDeCompras.findIndex(function(producto){
    return producto.id === productoAEliminar; //true o false
});

//Verificar si el valor del elemento que se encontro es valido. Con el findIndex ppor a devolver el primer indice del elemento que cumpla con la condicion. Si no encuentra el elemeneto que coincide con la condicion, entonces vamos a devolver un -1, esto para evitar borrar un elemento que no sea (pensando que tenemos un indice 0)
if (indiceProductoAEliminar !== -1){ //0, 1, 2, 3 disparan true y se activa el if. Que el -1 dispara un false, y no se activa el if.
    carritoDeCompras.splice(indiceProductoAEliminar, 1);
}

//Muestro la nueva informacion de mi carrito 
console.log("Tienes: ", carritoDeCompras.length, " producto(s) en tu carrito"); //Como nada más tenemos un solo producto en el indice 0, pero id = 1, al eliminar, nos quedamos en 0 productos. 



//Comprar productos (pagar carrito de compras)
/*
El metodo forEach es un metodo de array de JS, que nos va a ayudar poder ejecutar una funcion en cada elemento de nuestro Array.

Sintaxis de un for Each

array.forEach(function(elemento, indice, arreglo))

*/

let total = 0;

//Oye JS, en mi carrito de compras, para cada producto que encuentres, ejecuta una funcion donde tomes un producto como parametros, y al encontrarlo vas a multiplicar el precio de ese producto por su catidad. Ya que lo hayas hecho, vas a tomar ese valor y lo vas a sumar y a reasignar a la variable llamada total que declare alla arribita. 

//Agregar un nuevo producto a mi carrito de compras
carritoDeCompras.push(producto);

carritoDeCompras.forEach(function(producto){
    total += producto.precio * producto.cantidad;
});

console.log("El total de tu carrito de compras es de: " , total);



let carritoJSON = JSON.stringify(carritoDeCompras);
console.log(carritoJSON);



//Vaciar carrito completo
// function vaciarCarritoCompleto(){
//     //Para vaciar todo el carrito
//     carritoDeCompras = [];
// }



// Función Para Agregar Producto para el Proyecto
// function agregarProducto(){
//     carritoDeCompras.push(objeto);
// }

// botonAgregarProductos.addEventListener("click", agregarProducto);