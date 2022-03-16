/**
 *  Ejercicio 11
 * A partir de la página web proporcionada y utilizando las funciones DOM, mostrar por pantalla la siguiente información:
 * Número de enlaces de la página
 * Dirección a la que enlaza el penúltimo enlace
 * Numero de enlaces que enlazan a http://prueba
 * Número de enlaces del tercer párrafo
 *
 * @author Javier Epifanio López
 */

window.onload = function () {
  let info = document.getElementById("informacion");

  // Numero de enlaces de la pagina
  let enlaces = document.getElementsByTagName("a");
  info.innerHTML = "Numero de enlaces = " + enlaces.length;

  // Direccion del penultimo enlace
  var mensaje = "El penultimo enlace apunta a: " + enlaces[enlaces.length - 2].href;
  info.innerHTML = info.innerHTML + "<br/>" + mensaje;

  // Numero de enlaces que apuntan a http://prueba
  let contador = 0;
  for (let i = 0; i < enlaces.length; i++) {
    // Es necesario comprobar los enlaces http://prueba y
    // http://prueba/ por las diferencias entre navegadores
    if (enlaces[i].href == "http://prueba" || enlaces[i].href == "http://prueba/") {
      contador++;
    }
  }
  info.innerHTML = info.innerHTML + "<br/>" + contador + " enlaces apuntan a http://prueba"

  // Numero de enlaces del tercer párrafo
  let parrafos = document.getElementsByTagName("p");
  enlaces = parrafos[2].getElementsByTagName("a");
  info.innerHTML = info.innerHTML + "<br/>" + "Numero de enlaces del tercer párrafo = " + enlaces.length;
}