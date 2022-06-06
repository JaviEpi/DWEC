/**
 * @author Javier Epifanio López 
 */

document.addEventListener("DOMContentLoaded", function () {
    /**
     * Elementos div del HTML
     */
    infoAct1 = document.getElementById("act1");
    infoAct2 = document.getElementById("act2");
    infoAct3 = document.getElementById("act3");
    infoAct4 = document.getElementById("act4");
    infoAct5 = document.getElementById("act5");
    infoAct6 = document.getElementById("act6");
    infoAct7 = document.getElementById("act7");
    infoAct8 = document.getElementById("act8");
    infoAct9 = document.getElementById("act9");
    infoAct10 = document.getElementById("act10");
    infoAct11 = document.getElementById("act11");

    /**
     * 1.Indica qué es un Set y crea uno partiendo del array [1, 2, 3, 4, 4]. 
     * Justifica su tamaño
     */
    let act1 = function () {
        const array = [1, 2, 3, 4];
        infoAct1.innerHTML += "El objeto Set permite almacenar valores únicos de cualquier tipo, incluso valores primitivos u referencias a objetos.";
        infoAct1.innerHTML += "Los objetos Set son colecciones de valores. Se puede iterar sus elementos en el orden de su inserción. Un valor en un Set sólo puede estar una vez; éste es único en la colección Set.";

        let miSet = new Set(array);

        infoAct1.innerHTML += `<br>El array declarado ${array} y su tamaño es ${array.length}.
        El set declarado es ${[...miSet]} con un tamaño de ${miSet.size}.`;

    }

    /**
     * Justifica por qué funciona el encadenamiento en los métodos de set "new Set().add(11).add(22)"
     */
    let act2 = function () {
        let miSet = new Set().add(11).add(12);

        infoAct2.innerHTML += `El encadenamiento ${[...miSet]} es posible `;

    }

    /**
     * Indica cómo se devuelve un valor de un set
     */
    let act3 = function () {
        let miSet = new Set().add(11).add(12).add(13);
        infoSet = miSet.values();

        infoAct3.innerHTML += `El set contiene ${[...miSet]}.<br>`;
        infoAct3.innerHTML += `Los valores lo podemos devolver con miSet.values() y para ver valor a valor lo podemos hacer con ${infoSet.next().value} ${infoSet.next().value} ${infoSet.next().value}`;
    }

    /**
     * Comparativa entre un array y un set: búsqueda de elementos, eliminación de elementos, búsqueda del elemento NaN, control de duplicados
     */
    let act4 = function () {
        let miSet = new Set().add(11).add(12).add(13);
        let array = [1, 2, 3, 4];
        infoAct4.innerHTML += `Valor del array: ${[...array]}<br>`;
        infoAct4.innerHTML += `Valor del set: ${[...miSet]}<br>`;

        infoAct4.innerHTML += `Busqueda de elemento para array: indexOf([índice]), por ejemplo, array.indexOf(1): ${array.indexOf(1)}<br>`;
        infoAct4.innerHTML += `Busqueda de elemtnos para set: has([índice]), por ejemplo, miSet.hash(1): ${miSet.has(1)}`;

        infoAct4.innerHTML += `Para borrar un elemento de un array utilizamos el método de array.splice([índice]), por ejemplo array.splice(1): ${array.splice(1)}<br>`;
        infoAct4.innerHTML += `Para borrar un elemento de un set utilizamos el método de array.delete([coincidencia]), por ejemplo miSet.delete(11): ${miSet.delete(11)}<br>`;

        miSet.add(NaN);
        array = [1, 2, 3, 4, NaN];

        infoAct4.innerHTML += `Para localizar 'NaN' lo hemos añaido a nuestro set: ${[...miSet]} y a nuestro array: ${[...array]}<br>`;
        infoAct4.innerHTML += `Para buscar el NaN en el set utilizaremos el método 'has': miSet.has(Nan) ${miSet.has(NaN)}<br>`;
        infoAct4.innerHTML += `Y para localizarlo en el array lo haremos con el slice: array.includes(4) ${array.includes(NaN)} <br>`;

        infoAct4.innerHTML += "Los duplicados en un Set no son aceptados, sin embargo, en un array es posible encontrarnos varios valores iguales.<br>";

    }

    /**
     * Crea un set donde se almacenen los alumnos ausentes. Repítelos y muéstralos.
     */
    let act5 = function () {
        let miSet = new Set().add("Pepe").add("Manolo").add("Rafael");

        infoAct5.innerHTML += `Alumnos ${[...miSet]} <br>`;
        miSet.add("Pepe").add("Alfonso");

        infoAct5.innerHTML += `Añadimos de nuevo 'Pepe' a Alumnos ${[...miSet]} <br>`;

        infoAct5.innerHTML += `Como podemos ver no añade el alumno con le mismo nombre, por que detecta que es el mismo <br>`;


    }

    /**
     * Indica qué es un Map y crea uno partiendo del array. Partiendo de él, crea tres arrays: Uno con las claves, otro con los valores y otro con los objetos.
     */
    let act6 = function () {

        infoAct6.innerHTML += "l objeto Map almacena pares clave/valor. Cualquier valor (tanto objetos como valores primitivos) pueden ser usados como clave o valor.<br>"

        let array = [
            ["clave1", "valor1"],
            ["clave2", "valor2"]
        ];
        map = new Map(array);

        let claves = map.keys();
        let valores = map.values();

        infoAct6.innerHTML += `Claves: ${[...claves].join(" ")}<br>`;
        infoAct6.innerHTML += `Valor: ${[...valores].join(" ")}<br>`;

        //infoAct6.innerHTML += `${map.entries()}`;
        console.log(map.entries());

    }

    /**
     * Demuestra que un Map admite claves de cualquier tipo: cadenas, null, NaN, null, funciones...
     */
    let act7 = function () {
        let map = new Map().set("clave1", "valor1").set(null, "valor2").set(NaN, "valor3").set(console.log(), "valor4");
        console.log(map.entries());
    }

    /**
     * Crea un map donde se almacenen los alumnos ausentes. Repítelos y muéstralos.
     */
    let act8 = function () {
        let map = new Map().set("alumno1", "Guan").set("alumno2", "Jose").set("alumno3", "Felipe");
        map.set("alumno2", "Jose");

        infoAct8.innerHTML += `Alumnos ${[...map.values()]} <br>`
        infoAct8.innerHTML += `Elementos duplicados no se pueden volver a introducir.`

    }

    let act9 = function (array = [1, 2, 3, 4, 5, 6]) {
        let miSet = new Set(array);

        return `El array: ${[...array].join(" ")} y el set ${[...miSet].join(" ")}`;

    }

    let act10 = function () {
        let resultado;
        resultado = act9(resultado);
        infoAct9.innerHTML = resultado;
    }

    act1();
    act2();
    act3();
    act4();
    act5();
    act6();
    act7();
    act8();
    act9();
    act10();
    act11();



})