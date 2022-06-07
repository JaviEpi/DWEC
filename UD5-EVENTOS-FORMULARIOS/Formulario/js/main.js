/**
 * Formulario completito
 * 
 * @author Javier Epifanio López
 */
let init = function () {
    input();
    select();
    enviar();
    limpiar();
}

function input() {
    // Asociamos comportamiento a cada input
    for (const ele of document.getElementsByTagName("input")) {
        ele.addEventListener("blur", () => {
            if (ele.type == "text") {
                ele.nextElementSibling.innerHTML = valida.comprobar(ele.value, ele.id); // Añadir tipo como parámetro
            }
            if (ele.type == "radio") {
                let radioButtons = [];
                radioButtons.push(ele);
                ele.parentElement.nextElementSibling.innerHTML = valida.compruebaRadio(radioButtons);
            }
        })
    };
}

function select() {
    let vehiculos = document.getElementsByTagName("select")[0]
    vehiculos.addEventListener("blur", function () {
        vehiculos.nextElementSibling.innerHTML = valida.compruebaSelect(vehiculos);
    });
};


function enviar() {
    document.getElementsByTagName("form")[0].addEventListener("submit", () => {

        event.preventDefault();
        for (const input of document.getElementsByTagName("input")) {
            input.dispatchEvent(new Event("blur"));
        }
    })
}

/**
 * 
 */
function limpiar() {

    document.getElementsByTagName("form")[0].addEventListener("reset", () => {

        for (const ele of document.getElementsByTagName("input")) {
            if (ele.type == "text") {
                ele.value = "";
                ele.nextElementSibling.innerHTML = "";
            }
            if (ele.type == "radio") {
                ele.checked = false;
                ele.parentElement.nextElementSibling.innerHTML = "";                
            }
        }
    })
}

/**
 * 
 */
function rellena() {
    for (const ele of document.getElementsByTagName("input")) {
        if (ele.type == "text") {
            ele.value = "javier";
            ele.dispatchEvent(new Event("blur"));
        }
        if (ele.type == "radio") {
            ele.checked = true;
            ele.dispatchEvent(new Event("blur"));
        }
    }
}

document.addEventListener("DOMContentLoaded", init);

