"use strict";
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
function guardar(random) {
    localStorage.setItem('random', random.toString());
}
function recuperar() {
    var random = localStorage.getItem('random');
    var random_number = 0;
    if (random != null) {
        random_number = parseInt(random, 10);
    }
    return random_number;
}
function Adivinar() {
    var aleatorio;
    aleatorio = recuperar();
    var numero;
    var random = Math.random();
    if (aleatorio == 0) {
        aleatorio = Math.floor(random * 10);
        guardar(aleatorio);
    }
    numero = parseInt(document.getElementById("numero").value);
    if (numero == aleatorio) {
        alert("Lograste adivinar!!!");
        localStorage.clear();
    }
    else {
        alert("Sigue intentando");
        document.getElementById("numero").value = "";
    }
}
