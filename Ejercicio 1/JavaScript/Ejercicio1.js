alert("Conectado")


/**
 * se le pide ingresar datos al usuario desde la consola, uno por uno, si se ingresa un 3er dato este dato sera seleccionado como la pelicula 
 */

let datosUsuario = [];
//inicializo el valor en 2
let Pelicula = datosUsuario[2];
console.log(`Agrega tu nombre por favor`)
function agregarDato(datosNuevos){
// Cada dato que sea agregado en consola a agregar datos lo guarda en el array
    datosNuevos = datosUsuario.push(datosNuevos);
    // el if revisa si hay un valor en la posición 2 del array datosUsuario y muestra la siguie nte info
    if(datosUsuario[2]) {
        console.log(`The film ${Pelicula=datosUsuario[2]} is one of my favorites`);
}
}