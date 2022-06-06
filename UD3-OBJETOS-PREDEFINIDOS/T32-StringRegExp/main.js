{
    /**
     *   @author Javier Epifanio López
     * 
     */

    //Función que capitaliza el texto del formulario
    const capitaliza = (elemento) => {
        let listaPalabras = elemento.value.split(" ");
        for (let i = 0; i < listaPalabras.length; i++) {
            listaPalabras[i] = listaPalabras[i].charAt(0).toUpperCase() + listaPalabras[i].slice(1);
        }
        return listaPalabras;
    }

    //Transforma palabra a otra con las mayúsculas/minúsculas invertidas.
    const invertir = (elemento) => {
        let listaPalabras = elemento.value.split(" ");
        for (let i = 0; i < listaPalabras.length; i++) {
            let palabra = "";
            for (let j = 0; j < listaPalabras[i].length; j++) {
                if (listaPalabras[i][j].toLowerCase() == listaPalabras[i][j]) {
                    let letraMayuscula = listaPalabras[i][j].toUpperCase();
                    palabra += letraMayuscula;
                }
                if (listaPalabras[i][j].toUpperCase() == listaPalabras[i][j]) {
                    let letraMinuscula = listaPalabras[i][j].toLowerCase();
                    palabra += letraMinuscula;
                }
            }
            listaPalabras[i] = palabra;
        }
        return listaPalabras;
    }

    //Transformar a camelCase
    const camelCase = (elemento) => {
        return elemento.value.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    //Quitar camelCase 
    const sinCamelCase = (elemento) => {
        return elemento.value.replace(/([A-Z])/g, ' $1').trim().split(' ').map(function (word) {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ')
    }

    //matriculas
    const validarMatricula = (matricula) => {
        //Expresion regular para validar matricula
        let expresion = /[0-9]{4}[\s,-]?[B-D,F-H,J-N,P,R-T,V-Z]{3}/;
        if (expresion.test(matricula)) {
            return true;
        }
        return false;
    }

    //Codigo postal
    const validarCodigoPostal = (cpostal) => {
        //Expresion regular para validar codigo postal 
        let expresion = /\b(50|51|52|[1-4][0-9]|0[1-9])(\d\d[1-9]|\d[1-9]\d|[1-9]\d\d)\b/;
        if (expresion.test(cpostal)) {
            return true;
        }
        return false;
    }

    //MAC
    const validarMAC = (mac) => {
        //Expresion regular para validar MAC
        let expresion = /[A-Z]{2}-[A-Z]{2}-[A-Z][0-9]-[0-9]{2}-[0-9]{2}-[0-9]{2}|[A-Z]{2}:[A-Z]{2}:[A-Z][0-9]:[0-9]{2}:[0-9]{2}:[0-9]{2}|[A-Z]{2}[A-Z]{2}[A-Z][0-9][0-9]{2}[0-9]{2}[0-9]{2}/;
        //Expresion regular que no permite sin espacios -> ([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})
        if (expresion.test(mac)) {
            return true;
        }
        return false;
    }

    //IP
    const validarIP = (ip) => {
        //Expresion regular para validar ip
        let expresion = /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/;
        if (expresion.test(ip)) {
            return true;
        }
        return false;
    }


    document.addEventListener('DOMContentLoaded', function () {

        //Capitalizar palabras, las muestgro en una lista
        let capitalizaElem = document.getElementById("capitaliza");
        capitalizaElem.addEventListener('blur', function () {
            console.log(capitaliza(capitalizaElem));
        });

        //Invertir palabras, las muestro en una lista
        let invierteElem = document.getElementById("invierte");
        invierteElem.addEventListener('blur', function () {
            console.log(invertir(invierteElem));
        });

        //CamelCase
        let camelCaseElem = document.getElementById("camelCase");
        camelCaseElem.addEventListener('blur', function () {
            console.log(camelCase(camelCaseElem));
        });

        //Sin camelCase
        let sinCamelCaseElem = document.getElementById("sinCamelCase");
        sinCamelCaseElem.addEventListener('blur', function () {
            console.log(sinCamelCase(sinCamelCaseElem));
        });

        //Finaliza
        finaliza.addEventListener("blur", function () {
            let cadena = finaliza.value.trim();
            let finalizaCon = document.getElementById("finalizaCon");
            let ultimaPalabra = cadena.substr(cadena.lastIndexOf(" ") + 1, cadena.length - 1);
            if (ultimaPalabra === finalizaCon.value) {
                console.log("Coincide con la ultima palabra");
            } else {
                console.log("No coincide con la ultima palabra");
            }
        });

        //Comienza
        comienza.addEventListener("blur", function () {
            let cadena = comienza.value.trim();
            let comienzaCon = document.getElementById("comienzaCon");
            let primeraPalabra = cadena.substr(0, cadena.indexOf(" "));
            if (primeraPalabra === comienzaCon.value) {
                console.log("Coincide con la primera palabra");
            } else {
                console.log("No coincide con la primera palabra");
            }
        });

        //DNI VALIDAR
        let dni = document.getElementById("dni");
        dni.addEventListener("blur", function () {
            let cadena = dni.value.trim();
            let exp = /^\d{8}[a-zA-Z]$/i;
            if (exp.test(cadena)) {
                let array = cadena.split("");
                let letra = array[8];
                let numero = parseInt(array.slice(0, 8).join(""));
                let resto = numero % 23;
                let letras = "TRWAGMYFPDXBNJZSQVHLCKET";
                let letraCalculada = letras.charAt(resto);
                if (letra == letraCalculada) {
                    console.log("DNI CORRECTO");
                } else {
                    console.log("DNI INCORRECTO");
                }
            } else {
                console.log("DNI INCORRECTO");
            }
        });

        //Matriculas
        let matriculas = document.getElementById("matriculas");
        matriculas.addEventListener("blur", function () {
            let matricula = matriculas.value.split("\n");
            for (let i = 0; i < matricula.length; i++) {
                if (validarMatricula(matricula[i])) {
                    console.log("Matricula " + matricula[i] + " correcta");
                } else {
                    console.log("Matricula " + matricula[i] + " incorrecta");
                }
            }
        });

        //Codigo postal
        let codigosPostales = document.getElementById("codigosPostales");
        codigosPostales.addEventListener("blur", function () {
            let arrCP = codigosPostales.value.split("\n");
            for (let i = 0; i < arrCP.length; i++) {
                if (validarCodigoPostal(arrCP[i])) {
                    console.log("Codigo Postal " + arrCP[i] + " correcta");
                } else {
                    console.log("Codigo Postal " + arrCP[i] + " incorrecta");
                }
            }
        });

        //MAC
        let mac = document.getElementById("dirMac");
        mac.addEventListener("blur", function () {
            let arrMac = mac.value.split("\n");
            for (let i = 0; i < arrMac.length; i++) {
                if (validarMAC(arrMac[i])) {
                    console.log("Direccion MAC " + arrMac[i] + " correcta");
                } else {
                    console.log("Direccion MAC " + arrMac[i] + " incorrecta");
                }
            }
        });

        //IP
        let ip = document.getElementById("dirIP");
        ip.addEventListener("blur", function () {
            let arrIP = ip.value.split("\n");
            for (let i = 0; i < arrIP.length; i++) {
                if (validarIP(arrIP[i])) {
                    console.log("Direccion IP " + arrIP[i] + " correcta");
                } else {
                    console.log("Direccion IP " + arrIP[i] + " incorrecta");
                }
            }
        });
    });

}