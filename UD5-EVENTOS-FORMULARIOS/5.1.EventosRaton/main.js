/**
 * @author Javier Epifanio López
 */
document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    // pintar el lienzo
    function pintarLienzo() {
        this.style.backgroundColor = "rgb" + "(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
    }
    function reescribir(e) {
        let context = this.getContext('2d');
        context.clearRect(0, 0, this.width, this.height);
        this.style.backgroundColor = "rgb" + "(" + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + "," + Math.floor(Math.random() * 256) + ")";
        context.fillText(e, 10, 10);
        context.fillText(`(${e.clientX},${e.clientY})`, 20, 100);
    }
    let canvas = document.getElementsByTagName('canvas');
    for (let index = 0; index < canvas.length; index++) {
        let bindCanvas = pintarLienzo.bind(canvas[index]);
        bindCanvas();
        canvas[index].addEventListener(canvas[index].getAttribute("id"), function (e) {
            bindCanvas = reescribir.bind(canvas[index]);
            bindCanvas(e);
    });
}
});