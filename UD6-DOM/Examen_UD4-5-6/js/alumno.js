class Alumno{
    #nombre;
    #apellidos;
    #curso;
    constructor(nombre, apellido, curso) {
        this.#setNombre = nombre;
        this.#setApellidos = apellido;
        this.#setCurso = curso;
    }
    get getNombre() {
        return this.#nombre;
    }
    get getApellidos() {
        return this.#apellidos;
    }
    get getCurso() {
        return this.#curso;
    }

    set #setNombre(nombre) {
        this.#nombre = nombre;
    };
    set #setApellidos(apellidos) {
        this.#apellidos = apellidos;
    };
    set #setCurso(curso) {
        if (/^([1-2])(asir|daw|dam)/gm.test(curso)) {
            this.#curso = curso;
        }else{
            throw new Error("Curso invalido");
        }
    };

    mostrar(){
        console.log("El alumno: "+this.getNombre +" "+ this.getApellidos +" esta matriculado en " + this.getCurso);
    }
}