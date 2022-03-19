/**
 * Ejercicio 14
 * A partir de la página web proporcionada, completar el código JavaScript para que:   
 *    Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
 *    Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
 *    Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
 *    Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado (pista: propiedad innerHTML)
 * 
 * @author Javier Epifanio López
 */

 function muestraOculta() {
  var idEnlace = this.id;
  var trozos = idEnlace.split('_');
  var numero = trozos[1];
  var parrafo = document.getElementById('contenidos_' + numero);

  switch(parrafo.style.display) {
    case 'none':
      parrafo.style.display = 'block';
      this.innerHTML = 'Ocultar contenidos';
      break;
    case 'block':
    case '':
      parrafo.style.display = 'none';
      this.innerHTML = 'Mostrar contenidos';
      break;
  }
}

window.onload = function() {
  var enlaces = document.getElementsByTagName('a');
  for(i in enlaces) {
    enlaces[i].onclick = muestraOculta;
  }
}


