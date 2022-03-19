# UD1 A3. Etiqueta script: Añadiendo comportamiento al html

#### 1. Ventajas de incorporar el script desde un fichero externo frente a hacerlo en línea (código javascript directamente en el fichero HTML)
- Fichero externo:

	- `<script type="text/javascript" src="/js/codigo.js"></script>`

	Se pueden crear todos los archivos JavaScript que sean necesarios y cada documento XHTML puede enlazar tantos archivos JavaScript como necesite. La principal ventaja de enlazar un archivo JavaScript externo es que se simplifica el código de la página, que se puede reutilizar el mismo código JavaScript en todas las páginas del sitio web y que cualquier modificación realizada en el archivo JavaScript se ve reflejada inmediatamente en todas las páginas que lo enlazan


- En el mismo fichero:

	- `<script type="text/javascript"> alert("Hola mundo!");</script>`

	Aunque es correcto incluir cualquier bloque de código en cualquier zona de la página, se recomienda definir el código JavaScript dentro de la cabecera del documento (sección `<head>`) o al final de la página (antes de la etiqueta de cierre `</body>`. Con esta segunda opción se consigue mejorar el tiempo de carga de la página, ya que primero se mostrará todo el contenido de la web y por último se cargarán los javascript.



---------
#### 2. Atributos aplicables a la etiqueta script

La etiqueta script soporta los siguientes atributos, algunos
predeterminados, otros denominados booleanos:
- 	 type
- 	 src
- 	 charset
- 	 defer
- 	 async
- 	 xml:space (no soportado en HTML5)
- 	 crossorigin
- 	 importance
- 	 integrity
- 	 nomodule
- 	 nonce
- 	 text
- 	 language

--------
#### 3. Atributos por defecto.

Los atributos por defecto de la etiqueta script son type, src y charset:

`<script type=”text/javascript” src=”ruta/script.js charset=”charset”></script>`

- **type:** Indica el tipo de archivo.
- **src:** Indica la ruta del archivo js externo.
- **charset:** Especifica la codificación del archivo js externo.

--------
#### 4. Atributos booleanos. Qué implican.

- `<script>`sin atributos: El archivo HTML se analizará hasta que se acceda al archivo de secuencia de comandos, en ese momento se detendrá el análisis y se realizará una solicitud para recuperar el archivo (si es externo). El script se ejecutará antes de reanudar el análisis.

- `<script async>` : Descarga el archivo durante el análisis de HTML y pausará el analizador de HTML para ejecutarlo cuando haya terminado de descargarse.

- `<script defer>`: Descarga el archivo durante el análisis de HTML y solo lo ejecutará después de que el analizador se haya completado. deferTambién se garantiza que los scripts se ejecuten en el orden en que aparecen en el documento.
----------

#### 5. Sitio recomendado para colocar la etiqueta script.

Esto es lo que ocurre cuando un navegador carga una web con una
etiqueta `<script>`:
1. Toma la página HTML (v.g: index.html)
2. Comienza a parsear el HTML
3. El parser encuentra una etiqueta `<script>` referenciando un archivo con script externo.
4. El navegador busca el archivo. Mientras tanto, el parseador se bloquea y deja de parsear el resto de HTML de la página.
5. Después de un tiempo el script es descargado y ejecutado.
6. El parseador continúa parseando el resto de la página.

El punto 4 genera una mala experiencia de usuario, al detenerse la carga de la
web hasta que no se hayan descargado todos los scripts.

La antigua recomendación era colocar la etiqueta `<script>` al final de `<body>`,
puesto que así se garantiza que el parseador no es bloqueado hasta que no se haya descargado el árbol DOM en su totalidad.

No obstante, en sitios grandes, con hojas de estilos grandes y scripts grandes,
descargar cuanto antes los scripts es importante para la puesta a punto.
Como hemos visto, el uso de atributos como async y defer permiten una
descarga asíncrona, permitiendo una descarga temprana de los scripts y sin
bloquear el navegador.
La mayoría de los navegadores (un 94,59 % según caniuse.com) soportan este
tipo de atributos.
Por todo ello, la recomendación actual es colocar el script en la etiqueta
`<head>` y usar los atributos async y defer, permitiendo tanto la descarga rápida
como evitando el bloqueo del navegador.

-------
#### 6. Etiqueta noscript: utilidad, atributos y dónde colocar

La etiqueta `<noscript>` es una etiqueta que complementa a `<script>`, puesto que
se utiliza para definir un contenido alternativo en el documento web cuando el
navegador no soporta la ejecución de scripts o cuando éstos se encuentran
desactivados en el navegador que recibe el documento.
La etiqueta se puede utilizar dentro del encabezado del documento o bien en el
cuerpo del mismo, dependiendo de su posición se suele utilizar de forma
distinta.
Normalmente si se utiliza en el encabezado del documento, es decir dentro de
la etiqueta `<head>`, suele afectar a etiquetas como `<link>, <style>` y `<meta>`, de
forma que permite realizar la carga alternativa de estos elementos en caso de que el navegador no permite la ejecución de scripts.

Por otra parte se suele utilizar dentro del cuerpo del documento para indicar
que el navegador no permite la ejecución del script que se intenta ejecutar.
La etiqueta es soportada en la mayoría de navegadores, siendo su sintaxis la
siguiente: `<noscript> `Contenido a visualizar o cargar por el navegador `</noscript>`

----------
#### 7. Bibliografía

https://www.w3schools.com/tags/tag_noscript.asp

https://stackoverflow.com/questions/436411/where-should-i-put-script-tags-in-html-markup

https://www.w3schools.com/tags/att_script_defer.asp

https://www.w3schools.com/tags/tag_script.asp

https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html

----------

**Trabajo realizado por:** 
    - Javier Epifanio López
