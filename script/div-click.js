"use strict";
var contenedores = document.querySelectorAll(".sub-contenedores");
contenedores.forEach(function (contenedor) {
    contenedor.addEventListener('click', function () {
        var value = contenedor.getAttribute('data-value');
        window.location.href = "".concat(value);
    });
});
