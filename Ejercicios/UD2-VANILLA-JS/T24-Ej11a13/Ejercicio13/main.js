/**
 * Ejercicio 13
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
 * 
 * @author Javier Epifanio López
 */


function anade() {
  let elemento = document.createElement("li");
  let texto = document.createTextNode("Elemento de prueba");
  elemento.appendChild(texto);

  let lista = document.getElementById("lista");
  lista.appendChild(elemento);

  let nuevoElemento = "<li>Texto de prueba</li>";
  lista.innerHTML = lista.innerHTML + nuevoElemento;
}
