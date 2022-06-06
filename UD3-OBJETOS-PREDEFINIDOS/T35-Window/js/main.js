/**
 * @author Francisco Javier Campos Gutiérrez
 *
 * Enunciado:
 *     Con altura. Muestra en  una lista la siguiente información. Cada uno de las etiquetas <ol> y <li> han de crearse mediante los métodos de document. 
 *         Explica en cada uno la diferencia con respecto a los demás.
 *         window.outerHeight
 *         window.innerHeight
 *         window.screen.availHeight
 *         window.screen.height
 *     Scrolleando. El objeto window dispone de las propiedades scrollX, scrollY y scrollbars. Muéstralos reaccionando al evento scroll sobre window. Además, 
 *     crea botones que demuestren el uso de los métodos de scroll en window. Explica en cada botón el método que usas. Por ejemplo:
 *         Un botón "bajar línea" para bajar una línea.
 *         Un botón "subir línea" para subir una línea
 *         Un botón "bajar" para bajar una página.
 *         Un botón "subir" para subir una página.
 *         Un botón "inicio" para ir al inicio del documento
 *         Un botón "fin" para ir al final del documento.
 *     Mi URL. Crea una página que te muestre debidamente desglosada la url. (servidor, protocolo, ruta...)
 *     El tiempo es oro. Crea una página que cada segundo te muestre actualizado un reloj digital del tipo "22:14:09 h" (usa timing events del objeto window)
 *
 */

document.addEventListener("DOMContentLoaded", function () {
    let resulEj11 = document.getElementById("resulEj11");
    let resulEj12 = document.getElementById("resulEj12");
    let botonEj13 = document.getElementById("resulEj13");
    let botonEj14 = document.getElementById("resulEj14");
    let botonEj21 = document.getElementById("resulEj21");
    let botonEj22 = document.getElementById("resulEj22");
    let botonEj25 = document.getElementById("resulEj25");
    let botonEj26 = document.getElementById("resulEj26");

    resulEj11.innerHTML += `<p>Ancho externo de la pantalla: ${window.outerHeight} px`;
    resulEj12.innerHTML += `<p>Ancho interno de la pantalla: ${window.innerHeight} px`;
    botonEj13.innerHTML += `ropiedad devuelve el ancho de la pantalla del visitante, en píxeles, menos las características de la interfaz como la barra de tareas de Windows.: ${screen.availHeight} px`;
    botonEj14.innerHTML += `devuelve la altura de la pantalla del visitante en píxeles: ${screen.height} px`;


    /**
     * Función scroll hacia abajo
     */
    let ej21 = function () {

        window.scrollBy(0, 100);
    }

    /**
     * Función scroll hacia arriba
     */
    let ej22 = function () {

        window.scrollBy(0, -100);
    }

    /**
     * Bajar abajo del todo
     */
    let ej25 = function () {
        window.scrollTo(0, window.scrollMaxY)

    }

    /**
     * Subir arriba del todo
     */
    let ej26 = function () {
        window.scrollTo(0, 0)

    }

    let resulEj4 = document.getElementById("resulEj3");
    resulEj4.innerHTML = `  URL: " ${window.location.href} "<br>
                            Protocolo: " ${window.location.protocol} " <br>
                            Host: " ${window.location.host} " <br>
                            Puerto: " ${window.location.port} " * En caso de que salga especificado    `


    /**
     * Función crear reloj
     */
    let ej4 = function () {
        let resulEj4 = document.getElementById("resulEj4");

        resulEj4.innerHTML = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`

    }


    botonEj21.addEventListener("click", ej21);
    botonEj22.addEventListener("click", ej22);
    botonEj25.addEventListener("click", ej25);
    botonEj26.addEventListener("click", ej26);
    setInterval(ej4, 1000);




})