/**
 * Tarea 3.6. Listado Ventanas.
 * 
 * @author Javier Epifanio López
 */
document.addEventListener("DOMContentLoaded", function () {
    let arrVentanas = [];
    let creaVentana = document.getElementById("creaVentana");
    let creaVentanas = document.getElementById("creaVentanas");
    let cierraVentanas = document.getElementById("cerrarVentanas");


    /**
     * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea una nueva ventana 
     * ubicada en la esquina superior izquierda de la pantalla (top = 0, left = 0) y con los tamaños indicados.
     */
    let ej01 = function () {

        let ventana = window.open('', '', 'width=200,height=200');

        ventana.document.open();
        ventana.document.write("<p>Se han usado las siguientes propiedades</p><ul><li>Ancho 300</li><li>Alto 200</li></ul>");
        ventana.document.close();

    }

    /**
     * Crea la siguiente página Web (lo más dinámica posible) donde el botón crea cinco nuevas ventanas ubicadas en la esquina tal y como se muestran.
     * Métodos a utilizar:
     */
    let ej02 = function () {
        for (let i = 0; i < 5; i++) {
            let ventana = window.open('', '', 'width=200,height=200');
            arrVentanas.push(ventana);
            ventana.document.open();
            ventana.document.write(`
                                    <!DOCTYPE html>
                                    <html lang="en">
                                    <head>
                                        <meta charset="UTF-8">
                                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                                        <script src="js/cerrarVentanas.js"></script>
                                        <title>Ejercicio Ventanas</title>
                                    </head>
                                    <body>
                                    <p> Ventana ${i + 1} </p>
                                    <button id="cerrarVentanas">Cerrar Ventana</button>
                                    </body>
                                    </html>
                                    `);
            ventana.document.close();
        }
    }

    let ej03 = function () {
        for (let i = 0; i < arrVentanas.length; i++) {
            arrVentanas[i].close();
        }
    }


    creaVentana.addEventListener("click", ej01);
    creaVentanas.addEventListener("click", ej02);
    cierraVentanas.addEventListener("click", ej03);

})