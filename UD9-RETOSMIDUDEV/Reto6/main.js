/**
 * 
*/

function sumPairs(numbers,result){
    let sum = 0;
    // copia del array
    let numbersCopy = numbers.slice();
    // recorremos el array
    for (let i = 0; i < numbers.length; i++) {
        // sumar la posicion 0 con la 1, la 0 con la 2, etc
        sum += numbersCopy[i];
        // eliminar la posicion 0, 1, 2, etc
        numbersCopy.splice(i,1);
        
        // si la suma es igual al resultado, devolver true
        if (sum === result) {
            // devolver un array con los dos numeros que suman el resultado
            return [numbers[i], numbers[i]];
        }
    
}
}

console.log(sumPairs([3, 5,5, 7, 2],10));



