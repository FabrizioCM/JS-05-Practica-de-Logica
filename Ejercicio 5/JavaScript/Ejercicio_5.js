//Definimos un dato de entrada
function numerofactorial(Factorial) {
  //Si factorial es estrictamente igual a 0 entonces muestra mensaje
    if (Factorial === 0) {
      console.log("El factorial de 0 es 1");
  //si no entonces de derecha a izquierda busca el valor por ejemplo factorial de 4 es 24 
  //Entonces 1*1 =2*3=6*4=24 y finaliza 
    } else {
      let resultado = 1;
      for (let i = 1; i <= Factorial; i++) {
        resultado = resultado * i;
      }
      //Imprime la sentencia mas el resultado 
      console.log(`El factorial de ${Factorial} es ${resultado}`);
    }
  }