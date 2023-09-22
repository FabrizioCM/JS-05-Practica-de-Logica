//Añades un numero desde la consola
function cuentaAtras(cuentaRegresiva) {
//escribe un mensaje en el cual se coloca el valor actual de cuentaRegresiva
    console.log(`Time for bed after ${cuentaRegresiva} Seconds`);
// si cuentaRegresiva es igual a 0 entonces
    if (cuentaRegresiva > 0) {
        //Si aun quedan numeros en cuentaRegresiva se le resta uno y despues de un segundo repite todo el codigo nuevamente 
        //de manera recursiva la funcion timeOut llama de nuevo a cuentaAtras
        setTimeout(() => cuentaAtras(cuentaRegresiva - 2), 1000);
    } 
}