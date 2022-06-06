/**
 * @author Francisco Javier Campos Gutiérrez
 * 
 * Enunciado: Calcula el área de una circunferencia. Admitirá números decimales. 
 * Asegúrate de que en el resultado nunca se muestren más de 4 dígitos
 */

document.addEventListener("DOMContentLoaded", function () {

    let enviar = document.getElementById("enviar");
    let resultado = document.getElementById("resultado");

    let calculaRadio = function () {
        event.preventDefault();

        let radio = document.getElementById("radio").value;
        resultado.innerHTML = "El área de la circunferencia es: " + (Math.PI * radio).toFixed(4);
    }

    enviar.addEventListener("click", calculaRadio);
})