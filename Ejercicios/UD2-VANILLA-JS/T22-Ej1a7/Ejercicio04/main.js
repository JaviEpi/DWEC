/**
 * Ejercicio 4
 * A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2]; Determinar cual de los dos elementos de texto es mayor Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro resultado false. Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos
 * 
 * @author Javier Epifanio López
 *  
*/

let valores = [true, 5, false, "hola", "adios", 2];

// Parte 1 String
if (valores[3] > valores[4]) {
    console.log("hola > adios");
}else{
    console.log("hola < adios");
}

// Parte 2 Boolean
// Con el operador AND
console.log("true && false");
console.log(valores[0] && valores[2])

// Con el operador OR console.log("true  false");
console.log(valores[0]|| valores[2])

 // Parte 3 Number
console.log(" Suma de 5 +2 = " + (valores[1] + valores[5]) + "\n" + " Resta de 5 - 2 = " + (valores[1] - valores[5]) + "\n" 
+ " Mutiplicación de 5 * 2 = " + (valores[1] * valores[5]) + "\n" 
+ " División de 5 / 2 = " + (valores[1] / valores[5]) + "\n" 
+ " Potencia de 5 ** 2 = " + (valores[1]**valores[5]) + "\n"  );