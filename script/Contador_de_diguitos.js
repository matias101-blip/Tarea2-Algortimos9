"use strict";
function TablaDeMultiplicar() {
    var numero, multiplicacion, i;
    var respuesta = document.getElementById("tabla");
    numero = parseInt(document.getElementById("numero_mul").value);
    for (i = 1; i < 13; i++) {
        multiplicacion = numero * i;
        var RespLis = document.createElement("li");
        RespLis.textContent = "".concat(numero, " x ").concat(i, " = ").concat(multiplicacion);
        respuesta.appendChild(RespLis);
    }
    return respuesta;
}
function Clear() {
    var respuesta = document.getElementById("tabla");
    while (respuesta.firstChild) {
        respuesta.removeChild(respuesta.firstChild);
    }
}
function contarVocales() {
    debugger;
    var frase, i = 0, vocales = 0;
    frase = (document.getElementById("vocales").value).toLowerCase();
    var longitud = frase.length;
    while (i < longitud) {
        var fraseI = frase[i];
        if (fraseI == "a" || fraseI == "e" || fraseI == "i" || fraseI == "o" || fraseI == "u") {
            vocales = vocales + 1;
        }
        i = i + 1;
    }
    Mensaje("Hay ".concat(vocales, " Vocales"));
}
function ContadorDeDigitos() {
    var text, Longitud, i, caracter;
    var contador = 0;
    var contador1 = 0;
    text = (document.getElementById("text").value);
    Longitud = text.length;
    for (i = 0; i < Longitud; i++) {
        caracter = parseInt(text[i]);
        if (!isNaN(caracter)) {
            contador1 = contador1 + 1;
        }
        else if (text[i] != " ") {
            contador = contador + 1;
        }
    }
    Mensaje("En la cadena ".concat(text, " hay ").concat(contador, " letras y ").concat(contador1, " digitos"));
}

function contarAlfabeto() {
    debugger;
    var frase, i, vocales = 0;
    frase = (document.getElementById("abc").value).toUpperCase();
    var longitud = frase.length;
    for (i = 0; i < longitud; i++) {
        var fraseI = frase[i];
        if (fraseI >= "A" && fraseI <= "Z") {
            vocales = vocales + 1;
        }
    }
    Mensaje("Hay ".concat(vocales, " letras del alfabeto"));
}
