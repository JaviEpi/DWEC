/**
 * @author Francisco Javier Campos Gutiérrez
 * Enunciado: suma y multiplicación: Crea una página que sume y multiplique independientemente del los sistemas de numeración
 */

document.addEventListener("DOMContentLoaded", function () {

    let enviar = document.getElementById("enviar");
    let resultado = document.getElementById("resultado");
    let valor1 = 0
    let valor2 = 0;

    let seleccion1 = function () {
        let primerValor = document.getElementById("primerValor").value;

        var combo = document.getElementById("valor1");
        var selected = combo.options[combo.selectedIndex].text;

        if (selected == "Binario") {
            valor1 = parseInt(primerValor, 2);
        }
        if (selected == "Octal") {
            valor1 = parseInt(primerValor, 8);
        }
        if (selected == "Decimal") {
            valor1 = parseInt(primerValor, 10);
        }
        if (selected == "Hexadecimal") {
            valor1 = parseInt(primerValor, 16);
        }
        //return valor1;
    }
    let seleccion2 = function () {
        let segundoValor = document.getElementById("segundoValor").value;

        var combo = document.getElementById("valor2");
        var selected = combo.options[combo.selectedIndex].text;

        if (selected == "Binario") {
            valor2 = parseInt(segundoValor, 2);
        }
        if (selected == "Octal") {
            valor2 = parseInt(segundoValor, 8);
        }
        if (selected == "Decimal") {
            valor2 = parseInt(segundoValor, 10);
        }
        if (selected == "Hexadecimal") {
            valor2 = parseInt(segundoValor, 16);
        }
        //return valor2;
    }

    let operador = function () {
        event.preventDefault();
        let resultadoOperacion = 0;

        /* let valor1 = seleccion1();
        let valor2 = seleccion2(); */
        if (document.getElementById("suma").checked) {
            resultadoOperacion = valor1 + valor2;
        }
        if (document.getElementById("multiplicacion").checked) {
            resultadoOperacion = valor1 * valor2;
        }
        resultado.innerHTML = "Resultado: " + resultadoOperacion;
    }

    document.addEventListener("change", seleccion1);
    document.addEventListener("change", seleccion2);
    enviar.addEventListener("click", operador);


})