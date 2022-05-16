/**
 * Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.
 * Si le pasamos el argumento 5, se pintaría esto:
 * ____*____
 * ___***___
 * __*****__
 * _*******_
 * *********
 * ____#____
 * ____#____
 * 
 * Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy
 * importante que nuestro árbol siempre tenga la misma longitud por cada lado.
 * Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.
 * 
 */

function createXmasTree(height){
    let tree = '';
    for (let i = 0; i < height; i++) {
        let line = '';
        for (let j = 0; j < height - i - 1; j++) {
            line += '_';
        }
        for (let j = 0; j < i * 2 + 1; j++) {
            line += '*';
        }
        for (let j = 0; j < height - i - 1; j++) {
            line += '_';
        }
        tree += line + '\n';
    }
    for (let i = 0; i < 2; i++) {
        if (i < height ) {
            let line = '';
            for (let j = 0; j < height - 1; j++) {
                line += '_';
            }
            for (let j = 0; j <  1; j++) {
                line += '#';
            }
            for (let j = 0; j < height - 1; j++) {
                line += '_';
            }
            tree += line + '\n';
        }
    }
    return tree.trim();
  }



console.log(createXmasTree(1));