"use strict";
var Cadena = "H0l4";
var i;
for (i = 0; i < 4; i++) {
    var numero;
    numero = parseInt(Cadena[i]);
    if (!isNaN(numero)) {
        console.log("Aqui hay un numero");
    }
    else {
        console.log("Aqui hay una letra");
    }
}
