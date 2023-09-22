alert("Conectado")
//defines los valores del array
let arregloNumerico = [3,6,8,2,61,23,98,1,23,90];
//Proporciono un valor 0 a mi valor maximo igualandolo a arregloNumerico
let valorMaximo = arregloNumerico[0];
// defino variable valorInterior y esta la igualo a uno para estar en el primer punto del arregloNumerico
//El bucle se repetira hasta encontrar que valor interior es mayor a arregloNumerico
//por lo que mientras valorInterior sea menor a la longitud (length) arregloNumerico va a continuar 
//Cada bucle valor interior dejara de tener el valor asignado por el incremento ++  por lo que este avanza de poscicion 
for (let valorInterior = 1; valorInterior < arregloNumerico.length; valorInterior++) {
//Si arreglo numero con el valor de valor interior es mayor a valor maximo
    if (arregloNumerico[valorInterior] > valorMaximo) {
        //Convierte valor maximo al valor de elemento actual en el ejemplo 98
        valorMaximo = arregloNumerico[valorInterior];
    }
}
//Al finalizar entrega el valor maximo
console.log(`Tu valor maximo es: ${valorMaximo}`);





