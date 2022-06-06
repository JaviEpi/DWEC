// 1. Indica los tres argumentos del método forEach a un array. Demuestra su uso mediante un ejemplo.

let array = [4, 2, 6];
array.forEach(function(elemento, indice, array) {
    console.log(`El elemento ${elemento} tiene el índice ${indice} y pertenece al array ${array}`); 
});
console.log("\n");

//2. Indica la utilidad del operador in con los arrays. Demuestra su uso mediante un ejemplo.

console.log(1 in array);
console.log(6 in array);
console.log(5 in array);
console.log("\n");

// 3. Indica la función que comprueba si un objeto es o no un Array. Demuestra su uso mediante un ejemplo.

let miObjeto={};
console.log(Array.isArray(array));
console.log(Array.isArray(miObjeto));
console.log("\n");

// 4. Crea  una función que cree un array de la dimensión indicada, cuyo contenido sean los números naturales comenzando desde 0

function addElements(dimension) {
    for (let i = 0; i < dimension; i++) {
        array.push(i);
    }
    return array;
}
console.log("Array con nuevos elementos: "+addElements(5));

// 5. Crea  una función que devuelva un array con cada uno de los argumentos.

function copiaArray(...args) {
    return [...args];
}
console.log("Array nuevo: "+copiaArray(...array));

// 6. Crea  una función que devuelva un array con cada uno de los argumentos. En caso de que alguno de sus argumentos sea un array, que introduzca sus elementos uno a uno.

function crearArray(...args) {
    let array = [];
    args.forEach(element => {
        array.push(...element);
    });
    return array;
}
console.log(crearArray(array, [1, 2, 3], [4, 5, 6], [7, 8, 9]));

// 7. Crea una función que elimine todos los undefined de un array.

array.push(undefined);
console.log(array);
function deleteUndefined() {
    //Eliminar elemento undefined si existe en el array 
    array.forEach(element => {
        if (element === undefined) {
            array.pop();
        }
    });
    return array;
}
console.log(deleteUndefined());


// 8. Indica la diferencia entre los siguientes métodos, y demuestra su uso con algunos arrays:  Array.prototype.forEach(), Array.prototype.every(), Array.prototype.some() y Array.prototype.filter()

// Array.prototype.forEach()
const mostrarElForEach=()=>{
    let newArray=[];
    array.forEach(element => {
        newArray.push(element);
    });
    return newArray;
}
console.log("Mostrar con forEach "+mostrarElForEach());

// Array.prototype.every()
function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i], i, array)) {
            return false;
        }
    }
    return true;
}

// Array.prototype.some()
function sonNumeros(){
    array.every(element => {
        if(!typeof element === "number"){
            return false;
        }
    });
    return true;
}
if(!sonNumeros()){
    console.log("No son todos números");
}else{
    console.log("Son todos números");
}

//  Array.prototype.filter()
function mayoresde3(){
    const newArray=array.filter(element => element >3);
    return newArray;
}
console.log(mayoresde3());

// 9. Averigua qué método es el más eficiente para manejarse con arrays.  Compruébalo mediante performance.now() o similares
let miArray = new Array(100);

function introducirDirectamente(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = i;
    }
}

function introducirPush(array) {
    for (let i = 0; i < array.length; i++) {
        array.push(i);
    }
}

function introducirUnshift(array) {
    for (let i = 0; i < array.length; i++) {
        array.unshift(i);
    }
}

function eliminarDirectamente(array) {
    for (let i = 0; i < array.length; i++) {
        array[i]=undefined;
    }
}

function eliminarPop(array) {
    for (let i = 0; i < array.length; i++) {
        array.pop(i);
    }
}

function eliminarShift(array) {
    for (let i = 0; i < array.length; i++) {
        array.unshift(i);
    }
}
