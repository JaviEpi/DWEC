//TODO objeto que almacene los regexp

let valida = function () {
    let reg = {
        telefono: [/^\d{9}$/,
            "Formato incorrecto"
        ],
        mail: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
            "Email incorrecto"
        ],
        fecha: [/^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/,
            "Fecha incorrecta"
        ],
        dni: [/^\d{8}[a-zA-Z]$/,
            "Dni incorrecto"
        ],
        url: [/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
            "Url incorrecta"
        ]
    };
    let rellena = {
        telefono: "Prueba con 628191877",
        mail: "Que locura de mail! Prueba con otro!",
        fecha: "Una fecha sería: DD/MM/AAAA",
        dni: "Quizás con 31018613K este bién",
        url: "Tal vez http://www.google.es sea correcto",
        vehiculo: "Selecciona un vehículo",
        genero: "Selecciona cualquiera de las opciones"
    }

    let comprueba = function (reg, error, valor) {
        if (reg.exec(valor)) {
            return "Valor correcto";
        } else {
            return error;
        }
    };
    let compruebaSelect = function (el) {

        if (el.selectedIndex == null || el.selectedIndex == 0) {
            return rellena.vehiculo;
        }
        return "";
    };
    let compruebaRadio = function (ele) {
        return ele.some((i) => i.checked) ? "": rellena.genero;
    };
    let comprobar = function (valor, tipoInput) { // Comprobación del campo del html con la exresión regular, campos tipo texto
            switch (tipoInput) {
                case "telefono":
                    let [regTelefono, errorTlf] = reg.telefono;
                    return comprueba(regTelefono, errorTlf, valor);

                case "mail":
                    let [regMail, errorMail] = reg.mail;
                    return comprueba(regMail, errorMail, valor);

                case "fecha":
                    let [regFecha, errorFecha] = reg.fecha;
                    return comprueba(regFecha, errorFecha, valor);

                case "dni":
                    let [regDni, errorDni] = reg.dni;
                    return comprueba(regDni, errorDni, valor);

                case "url":
                    let [regUrl, errorUrl] = reg.url;
                    return comprueba(regUrl, errorUrl, valor);

            }
        

    };
    return {
        comprobar: comprobar,
        compruebaSelect: compruebaSelect,
        compruebaRadio: compruebaRadio
    };

}();
