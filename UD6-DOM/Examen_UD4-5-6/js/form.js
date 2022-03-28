document.addEventListener('DOMContentLoaded', function () {
    let inputCurso = document.querySelector("#curso");
    let spanCurso = document.querySelector("#cursoError");
    var isCorrect = false;
    // console.log(inputCurso[0]);
    inputCurso.addEventListener("blur", function (event) {
        // IMPORTANTE event.taget.value     
        let valorInput = event.target.value;
        const cursos = ["1daw", "2daw", "1asir", "2asir", "1dam", "2dam"];
        for (i = 0; i < cursos.length; i++) {
            if (valorInput === cursos[i]) {
                isCorrect = true
            }
        }

        // diferencia entre =, ==, ===
        if (isCorrect) {
            spanCurso.className = 'oculto'
        } else {
            let span = document.querySelector("#cursoError");
            // Añadir y quitar clases, REMBEMBER
            spanCurso.className = 'mostrar'
        }

    })



    // input nombre
    let inputNombre = document.querySelector("#nombre");
    let spanNombre = document.querySelector("#nombreError");
    inputNombre.addEventListener("blur", function (event) {
        let valorInput = event.target.value;
        // let span = document.querySelector("#nombreError");
        if (valorInput.length == 0) {
            spanNombre.className = 'mostrar'
        } else {
            spanNombre.className = 'oculto'
        }
    })

    // input apellidos
    let inputApellidos = document.querySelector("#apellidos");
    let spanApellidos = document.querySelector("#apellidosError");
    inputApellidos.addEventListener("blur", function (event) {
        let valorInput = event.target.value;
        if (valorInput.length == 0) {
            spanApellidos.className = 'mostrar'
        } else {
            spanApellidos.className = 'oculto'
        }
    })

    // input rellernar
    let inputRellenar = document.querySelector("#rellenar");
    inputRellenar.addEventListener("click", function () {
        inputNombre.value = "Javier";
        inputApellidos.value = "Epifanio López";
        inputCurso.value = "2daw";
        isCorrect = true

        // inputCurso.focus();
        // inputCurso.blur();
        // inputApellidos.blur();
        // inputNombre.blur();
    })

    // input reset
    let inputReset = document.querySelector("#reset");
    inputReset.addEventListener("click", function () {
        inputNombre.value = "";
        inputApellidos.value = "";
        inputCurso.value = "";
        
        isCorrect = false;
        // limpiar los span
        spanCurso.className = 'oculto'
        spanNombre.className = 'oculto'
        spanApellidos.className = 'oculto'

    })


    // input submit
    let inputSubmit = document.querySelector("#submit");

    inputSubmit.addEventListener("click", function () {
        inputNombre.focus();
        inputNombre.blur();
        inputApellidos.focus();
        inputApellidos.blur();
        inputCurso.focus();
        inputCurso.blur();

        if(spanCurso.className === 'oculto' && spanNombre.className === 'oculto' && spanApellidos.className === 'oculto') {

            const alumno = new Alumno(inputNombre.value,inputApellidos.value, inputCurso.value);

            inputReset.click();
            alumno.mostrar();
        }else{
            alumno.mostrar();
        }


    })
});