/**
 * Examen ejercicio de colorines
 * 
 * @author Javier Epifanio López
 */

window.addEventListener("DOMContentLoaded", function() {

    let comprobrarDivs = function(){
        grid = Array.from(document.querySelectorAll(".grid")[0].children)
        let divsPulsados = 0
        grid.forEach(grid => {
            if (grid.classList.length == 0) {
                divsPulsados++
                if (divsPulsados == 4) {
                    copiaGrid = document.querySelectorAll(".grid")[0].cloneNode("true")
                    parrafos= document.querySelectorAll("p")
                    parrafos[1].insertAdjacentElement("afterend",copiaGrid)
                }
            }
        })
    }

    let borrar =  function() {
            this.innerHTML = this.className
            this.className = ""
            this.removeEventListener("click",borrar)
            comprobrarDivs()
        }
        
    let parrafos= document.querySelectorAll("p")

    parrafos[0].innerHTML += " Javier"
    parrafos[1].innerHTML += " Epifanio López"
    parrafos[0].style.background = parrafos[1].style.background = "lightblue"

    const colores = ["rojo","amarillo","verde"]
    let grid = Array.from(document.querySelectorAll(".grid")[0].children)
    grid.forEach(div => {
        div.className = colores[Math.round(Math.random()*(colores.length -1))]
        div.addEventListener("click",borrar)
    })

});