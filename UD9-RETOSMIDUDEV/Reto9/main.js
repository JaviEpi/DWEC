/**
 * @author Javier Epifanio López
 */

/**
 *  la función groupBy recibe una colección (array) y una función o una propiedad, y devuelve un objeto con claves que son los valores de la función ejecutada pasando como argumento cada elemento o de la propiedad por cada elemento. Luego los valores son un array de los valores que tengan la misma llave.
 */
 function groupBy(collection, it) {
        // agrupar por la propiedad it, y devolver un objeto con las claves que son los valores de la función it y los valores son un array con los elementos que tengan la misma clave
        const obj = {};
        collection.forEach(elemento => {
            // comprobar la propiedad it
            if (typeof it === 'function') {
                // si es una función, ejecutarla
                const key = it(elemento);
                // si la clave no existe, crearla
                if (!obj[key]) {
                    obj[key] = [];
                }
                // añadir el elemento a la clave
                obj[key].push(elemento);
            } else {
                // si es una propiedad, comprobar si existe
                const key = elemento[it];
                // si la clave no existe, crearla
                if (!obj[key]) {
                    obj[key] = [];
                }
                // añadir el elemento a la clave
                obj[key].push(elemento);
            }
            

        });
        return obj;
 }

 groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
 groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
 groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }
 
 groupBy(
   [1397639141184, 1363223700000],
   timestamp => new Date(timestamp).getFullYear()
 )
 // { 2013: [1363223700000], 2014: [1397639141184] }
 
 groupBy([
   { title: 'JavaScript: The Good Parts', rating: 8 },
   { title: 'Aprendiendo Git', rating: 10 },
   { title: 'Clean Code', rating: 9 },
 ], 'rating')

 console.log(groupBy([6.1, 4.2, 6.3], Math.floor)) // { 6: [6.1, 6.3], 4: [4.2] }
    console.log(groupBy(['one', 'two', 'three'], 'length')) // { 3: ['one', 'two'], 5: ['three'] }