/**
 * @author Francisco Javier Campos Gutierrez
 *
 * Enunciado: Sistemas numéricos: Crea una página que transforme de un sistema
 * numérico a otro: binario, octal, decimal, hexadecimal.
 */

document.addEventListener("DOMContentLoaded", function () {
    let enviar = document.getElementById("enviar");


    let conversion = function () {
        event.preventDefault();

        let num = document.getElementById("ej01").value;
        let resultado = document.getElementById("resultado");

        if (document.getElementById("binario").checked) {

            resultado.innerHTML = "Binario: " + parseInt(num, 2) + "<br>";
            resultado.innerHTML += "Octal: " + parseInt(num, 2).toString(8) + "<br>";
            resultado.innerHTML += "Decimal: " + parseInt(num, 2).toString(10) + "<br>";
            resultado.innerHTML += "Hexadecimal: " + parseInt(num, 2).toString(16).toUpperCase() + "<br>";

        }
        if (document.getElementById("octal").checked) {

            resultado.innerHTML = "Binario: " + parseInt(num, 8).toString(2) + "<br>";
            resultado.innerHTML += "Octal: " + parseInt(num, 8) + "<br>";
            resultado.innerHTML += "Decimal: " + parseInt(num, 8).toString(10) + "<br>";
            resultado.innerHTML += "Hexadecimal: " + parseInt(num, 8).toString(16).toUpperCase() + "<br>";

        }
        if (document.getElementById("decimal").checked) {
            resultado.innerHTML = "Binario: " + parseInt(num, 10).toString(2) + "<br>";
            resultado.innerHTML += "Octal: " + parseInt(num, 10).toString(8) + "<br>";
            resultado.innerHTML += "Decimal: " + parseInt(num, 10) + "<br>";
            resultado.innerHTML += "Hexadecimal: " + parseInt(num, 10).toString(16).toUpperCase() + "<br>";

        }
        if (document.getElementById("hexadecimal").checked) {
            resultado.innerHTML = "Binario: " + parseInt(num, 16).toString(2) + "<br>";
            resultado.innerHTML += "Octal: " + parseInt(num, 16).toString(8) + "<br>";
            resultado.innerHTML += "Decimal: " + parseInt(num, 16).toString(10) + "<br>";
            resultado.innerHTML += "Hexadecimal: " + parseInt(num, 16).toUpperCase() + "<br>";

        }

    }

    enviar.addEventListener("click", conversion);
})