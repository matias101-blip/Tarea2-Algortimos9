"use strict";
function Sumar2numeros(numero1, numero2) {
    var suma;
    suma = "La suma de ".concat(numero1, " + ").concat(numero2, " es ").concat(numero1 + numero2);
    Mensaje(suma);
}
var numero1 = 10, numero2 = 12;
Sumar2numeros(numero1, numero2);
