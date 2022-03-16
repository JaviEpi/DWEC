/**
 * Ejercicio 8
 * Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
 * 
 * @author Javier Epifanio López
 */

function esPar(numero) {
    return (numero % 2 == 0) 
    ? "Es un número par" 
    : "Es un número impar"
}

document.addEventListener("DOMContentLoaded", function() {
    let input = document.querySelector("#numero");
    input.addEventListener("blur", function() {
        document.querySelector("#resultado").textContent = esPar(this.value);
    });
});

