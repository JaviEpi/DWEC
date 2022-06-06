/**
 * @author Javier Epifanio López
 * 
 * ambitos.js: declara variables con el mismo nombre y  con distintos ámbitos. Muestra su contenido en cada ámbito. Recuerda hacerla: 
 * local a una función, local a un bloque, global, accesible por un closure accesible dentro de una función anidada...
 * ambitoMultiplica.js: declara variables numéricas cada una e distintos ámbitos. Multiplícalas todas en el ámbito más interno. Recuerda hacerlas: 
 * local a una función, local a un bloque, global, accesible por un closure, accesible dentro de una función anidada...
 * closure.js: mediante una función arrow declara un closure. En cada invocación la variable "encerrada" se asignará por Logical nullish assignment
 */

 var variable="variable";
 let variable1="variable 1";
 
 for(i=0; i<5; i++){
     var variable="variable 1 modificada";
     console.log(variable);
 }
 
 if(true){
     var mensaje2="variable";
     console.log(variable1);
 }
 
 function crearFuncion(){
     var mensaje="variable";
     return function(){
         console.log(mensaje);
     }
 }
 let funcion=crearFuncion();
 funcion();