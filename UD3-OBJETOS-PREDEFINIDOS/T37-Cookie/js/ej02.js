/**
 * Tarea 3.7. Listado cookies y otros almacenamientos en el navegador
 * Crea otro sitio similar que demuestre el uso del localStorage
 * 
 *  @author Javier Epifanio López
 */

document.addEventListener("DOMContentLoaded", function () {
    let clave = document.getElementById("clave");
    let valor = document.getElementById("valor");
    let parrafo = document.getElementById("parrafo");
    let botonCrearCookie = document.getElementById("crear");
    let botonRecuperarCookie = document.getElementById("recuperar");
    let botonEliminar = document.getElementById("eliminar");
    let BotonEliminarTodas = document.getElementById("eliminarTodas");

    /**
     * 
     * @param {String} name 
     * @param {String} value 
     */
    function setCookie(name, value) {

        window.localStorage.setItem(name, value);
    }

    /**
     * 
     * @param {String} name 
     */
    function getCookie(name) {
        window.localStorage.getItem(name);
    }

    /**
     * 
     * @param {String} name 
     */
    function deleteCookie(name) {
        document.cookie = `${name}=${getCookie(name)}; max-age=-1; SameSite=Lax`;
    }

    /**
     * 
     */
    function deleteAll() {
        let cookies = document.cookie.split("; ");
        cookies.forEach(e => document.cookie = `${e}; max-age=-1; SameSite=Lax`)
    }

    botonCrearCookie.addEventListener("click", function () { setCookie(clave.value, valor.value); parrafo.innerHTML = `Cookie con clave: ${clave.value} = valor: ${valor.value}` });
    botonRecuperarCookie.addEventListener("click", function () { parrafo.innerHTML = `Cookie local encontrada: ${getCookie(clave.value)}` });
    botonEliminar.addEventListener("click", function () { deleteCookie(clave.value); parrafo.innerHTML = `Cookie ${clave.value} eliminada` });
    BotonEliminarTodas.addEventListener("click", function () { deleteAll(); parrafo.innerHTML = `Cookies eliminadas` })
});
