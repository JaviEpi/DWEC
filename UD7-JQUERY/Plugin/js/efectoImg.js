jQuery.fn.efectoImg = function (opciones) {
    var opciones = jQuery.extend({
        efecto: "fadeOut",
        duracion: 1000
    }, opciones);
    return this.each(function () {
        $(this).hide();
        $(this).fadeOut(opciones.duracion);
    });
}