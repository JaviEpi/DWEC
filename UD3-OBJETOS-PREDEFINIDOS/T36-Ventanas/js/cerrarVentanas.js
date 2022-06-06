/**
 * Tarea 3.6. Listado Ventanas.
 * 
 * @author Javier Epifanio López
 */
document.addEventListener("DOMContentLoaded", function () {
    let cierra = document.getElementById("cerrarVentanas");
    let cerrarVentanas = function() {
        window.close();
    }
    cierra.addEventListener("click", cerrarVentanas);
})