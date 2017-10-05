pasos para cifrado cesar

-Crear una variable en la cual se ingresar un texto, pedirlo con un prompt (texto valido: palabras o aquellos textos largos que contengan espacios).
-Verificar si el texto ingresado es valido, entonces crear una funcion que verifique el texto y que lo tranforme a un array para poder utilizarlo con comodidad, llamada validateText.
-Guardar en una nueva variable el texto modificado, para que sean letras sin espacio.
-Crear una variable vacia array para guardar las letras validas.
-Crear una variable con letras que siempre seran validas.
-primero verificar si es vacio con un if, si no es vacio, preguntar si la letra se encuentrar en letras validas (tambien con un for e if). Si no esta en letras validas, en ambos casos volver a hacer un prompt y que vuelva a pedir un texto valido.
-En caso de que sean letras, entonces agregarlo a la variable vacia, que es un array. utilizar push
-Por ultimo, retornar con return el array con la letras validas sin espacio.

-Crear una funcion llamada cipher para cifrar el texto que es un array.
-Craer una variable vacia donde ira el texto cifrado (string)
-Recorrer con for cada letra del texto y modificarla para que nos de el numero que necesitamos con la formula cesar y guardarla en una variable.
-Luego preguntar si la formula esta entre 90 a 65 incluidos o 97(no incluido) a 122 incluido, si es asi entonces buscar letra con metodo String.fromCharCode
-De lo contrario buscar con (formula-26) para que vuelva a empezar.
-Por ultimo, retornar el cifrado.

-Crear una funcion llamada decipher para decifrar el texto ingresado que es un array.
-Crear una variable vacia donde ira el texto decifrado.
-Recorrer con for cada letra del texto y modificarla para que nos de el numero que necesitamos con la formula cesar hacia atras, es decir restando 33.
-Luego preguntar si la formula esta entre 90(no incluido) a 65 incluido o 97 a 122 incluidos, si es asi entonces buscar letra con metodo String.fromCharCode.
-De lo contrario  buscar con (formula + 26) para volver a empezar.
-Por ultimo, retornar decifrado.


