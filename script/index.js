"use strict";
var contenedores = document.querySelectorAll(".sub-contenedores");
contenedores.forEach(function (contenedor) {
    contenedor.addEventListener('click', function () {
        debugger;
        console.log("CLICK!!!");
        var value = contenedor.getAttribute('data-value');
        window.location.href = "./templates/".concat(value);
    });
});
Saludar();
