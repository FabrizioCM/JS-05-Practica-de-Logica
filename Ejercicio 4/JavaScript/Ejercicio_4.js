function esPalindromo(nombrePalabra) {
//Hago que nombrePalabra pueda ser leida en caracteres mayusculas y minusculas
    nombrePalabra = nombrePalabra.toUpperCase();
    nombrePalabra = nombrePalabra.toLowerCase();  
//defino palabraReves =''; como string para tener una variable que sea mi palabra normal pero inversa en una funcion posterior
    let palabraReves = '';

//defino la variable recorrido como igual a la longitud de la palabra a ingresar y mientras recorrido sea mayor o igual a 0 se ejecutara el bucle
//al final de cada bucle recorrido se mueve hacia atras en nombrePalabra
    for (let recorrido = nombrePalabra.length - 1; recorrido >= 0; recorrido--) {
//aqui convierto palabraReves en una version al reves volteada de nombrePalabra y se concatena
        palabraReves = palabraReves + nombrePalabra[recorrido];
    }
//Por lo que si la palabraReves es igual a la nombrePalabra entonces es un palindromo
    if (palabraReves === nombrePalabra) {
        console.log(`La palabra ${nombrePalabra} es un palíndromo.`);
//Si no es lo mismo entonces no lo es    
    } else {
        console.log(`La palabra ${nombrePalabra} no es un palíndromo.`);
    }
}
//