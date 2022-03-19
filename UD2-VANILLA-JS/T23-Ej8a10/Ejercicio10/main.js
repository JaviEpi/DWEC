/**
 * Ejercicio 10
 * Definir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndromo complejo: "La ruta nos aporto otro paso natural".
 * 
 * @author Javier Epifanio López
 */

/**
 * 
 * @param {*} cadena 
 * @returns 
 */
function palindromo(cadena) {

    let resultado = "La cadena \""+cadena+"\" \n";
  
    // Pasar a minusculas la cadena
    let cadenaOriginal = cadena.toLowerCase();
  
    // Convertir la cadena en un array
    let letrasEspacios = cadenaOriginal.split("");
  
    // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
    var cadenaSinEspacios = "";
    for(let i in letrasEspacios) {
      if(letrasEspacios[i] != " ") {
        cadenaSinEspacios += letrasEspacios[i];
      }
    }
  
    let letras = cadenaSinEspacios.split("");
    let letrasReves = cadenaSinEspacios.split("").reverse();
  
    // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
    let iguales = true;
    for(let i in letras) {
      if(letras[i] == letrasReves[i]) {
        // Todo bien
      }
      else {
        // Alguna letra es distinta, por lo que ya no es un palindromo
        iguales = false;
      }
    }
  
    if(iguales) {
      resultado += " es un palíndromo";
    }
    else {
      resultado += " no es un palíndromo";
    }
  
    return resultado;
  }
  
  console.log(palindromo("Esta frase no se parece a ningun palindromo"));
  console.log(palindromo("La ruta nos aporto otro paso natural"));