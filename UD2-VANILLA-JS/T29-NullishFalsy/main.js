/** 
 * Practica 2.9: Nullish Falsy y otros entretenimientos js
 * 
 *   1.Crea la arrow function esFalsy que devuelva true si es un valor falsy, false en otro caso.
 * 
 *   2.Crea un array literal con al menos todos los valores falsy que conozcas. Recórrelos de dos 
 *      formas distintas e invoca la función esFalsy. Añade valores Truthy también.         imprmir x => es el valor x + funcion esFalsy = es falsy // no es falsy
 * 
 *   3.Crea un objeto literal con todos los valores falsy que conozcas. Recórrelos con el bucle "for in" e invoca la función esFalsy.
 * 
 *   4.Crea un método objetoPorDefecto que devuelva un objeto literal con una configuración por defecto. 
 *      El objeto contendrá a su vez otro objeto. Compruébalo con varios valores.
 * 
 * @author Javier Epifanio López
 */


tipos = [false,0,"",null,undefined,NaN,true,1,-1,"hola"]

function esFalsy(e) {
    if (e == false || e == 0 || e == "" || e == null || e == undefined || e == NaN) {
        return "Es falsy";
    } else {
        return "Es Truthy";
    }
}

tipos.forEcah(e => {
    console.log(esFalsy(e));
});

let objeto = {
    "false": false,
    "0": 0,
    "": "",
    "null": null,
    "undefined": undefined,
    "NaN": NaN
}

for (let key in objeto) {
    console.log(objeto[key]);
    console.log(esFalsy(objeto[key]));
}

function objetoPorDefecto() {
    let obj = {
        "false": false,
        "0": 0,
        "": "",
        "null": null,
        "undefined": undefined,
        "NaN": NaN
    }
    return obj;
}

