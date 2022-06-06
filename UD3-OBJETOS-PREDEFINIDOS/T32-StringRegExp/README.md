## Pratica 3.2. Listado String y RegExp

- [Código](main.js).

En JavaScript implementa estas funciones. Utiliza el mismo formulario para E/S de los textos. Cada caja de texto con una función distinta. La salida debe ir en un elemento adyacente. Cuida la accesibilidad/usabilidad

1. Capitaliza. Transforma entrada a otra similiar con la primera letra de cada palabra en mayúscula. 
2. Invierte.  Transforma entrada a otra similiar con las mayúsculas/minúsculas invertidas.
3. CamelCase.  Transforma entrada a otra similiar con formato en Camel Case (hola amigos cómo estáis -> holaAmigosCómoEstáis)
4. Sin CamelCase.  Transforma entrada a otra similiar quitando el formato Camel Case (holaAmigosCómoEstáis -> hola amigos cómo estáis)
5. Finaliza... Averigua si una cadena acaba con otra.
6. Empieza... Averigua si una cadena comienza con otra.
7. DNI. Indica error en caso de que la entrada no sea DNI válido. Usa expresiones regulares con grupos de captura en la comprobación de la letra.

    12328337S (válido)

    32446967Q (válido)

    8189963N (inválido)

    81899631 (inválido)

    81899631I(inválido, ni letras IÑOU)

    12345678Z (válido)

8. Matrículas. Extrae todas las matrículas válidas de una caja de texto.

    1234BCD (válida)

    1234 BCD (válida)

    1234-BCD (válida)

    123 BCD (inválida)

    1234 ABC (inválida, contiene vocal)

    1234 QBC (inválida, contiene la Q)

    1234 MNÑ (inválida, contiene la Ñ)


9. Códigos postales. Extrae todos los códigos postales válidos de una caja de texto. Códigos postales:

    52001 (válido)

    14014 (válido)

    53001 (inválido)

    14000 (inválido)


10. Dirección MAC. Comprueba que una entrada sea una MAC válida. Puedes usar

    guiones: AB-CD-F1-23-45-67 (válida)

    dos puntos: AB:CD:F1:23:45:67 (válida)

    ningún separador: ABCDF1234567 (válida)

    pero sólo uno de ellos en la misma MAC: AB:CDF1:23:45-67 (inválida)


11. Dirección IP.  Comprueba que una entrada sea una IP válida

    0.0.0.0 (válido)

    14.255.1.2 (válido)

    09.1.2.3 (inválido)

    1.260.4.5 (inválido)

    09.6.5.4 (inválido)

    1.2.3.011 (inválido)

-------

Trabajo realizado por: - Javier Epifanio López