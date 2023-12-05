"use strict";
var div_container_load = document.getElementById("caontenedorLoad");
function SumaDeParesImpares() {
    debugger;
    var input = document.getElementById("Numeros");
    var loader = document.createElement("div");
    var text = document.createElement("p");
    loader.classList.add("loader");
    div_container_load.appendChild(loader);
    text.textContent = "Procesando su solicitud...";
    div_container_load.appendChild(text);
    var numero, pares, impar, longitud, i;
    pares = 0, impar = 0;
    numero = input.value;
    longitud = numero.length;
    for (i = 0; i < longitud; i++) {
        var numeroo = parseInt(numero[i]);
        if (numeroo % 2 == 0) {
            pares = pares + numeroo;
        }
        else {
            impar = impar + 1;
        }
    }
    setTimeout(function () {
        while (div_container_load.firstChild) {
            div_container_load.removeChild(div_container_load.firstChild);
        }
        Mensaje("La suma de los numeros pares es ".concat(pares, " y la cantidad de los impares ").concat(impar));
    }, 3000);
    input.value = " ";
}
