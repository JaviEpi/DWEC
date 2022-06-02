/**
 * Mastermind.js
 * 
 * @author Javier Epifanio López
 */
document.addEventListener("DOMContentLoaded", function(){
    const colores = ["red", "white", "black", "yellow", "orange", "brown", "blue", "green"];

    // solucion 4 colores de forma aleatoria
    const solucion = [];
    for (let i = 0; i < 4; i++) {
        solucion.push(colores[Math.floor(Math.random() * colores.length)]);
    }
    console.log(solucion);
    // cuando haga un click en una bolaColor que salga el color de la bola
    const bolaColor = document.querySelectorAll("#bolasColores > div");
    
    bolaColor.forEach(function(bola){
        bola.addEventListener("click", function(){
            const clase = bola.className;
            const hueco = document.querySelector(".hueco");
            if (hueco.dataset.libre === "true") {
                hueco.className = clase;
                hueco.dataset.libre = "false";
            }
        });
    });

    const hueco = document.querySelectorAll(".hueco");
    // si los 4 huecos estan ocupados, console.log("ganaste")

    hueco.forEach(function(hueco){
        hueco.addEventListener("click", function(){
            if (hueco.dataset.libre === "false") {
                hueco.className = "hueco";
                hueco.dataset.libre = "true";
            }
        });
    });
    
    
    
});