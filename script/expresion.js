function ejercicio1() {
    var a, b, resultado;
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);
    resultado = "Resultado es: ".concat(2 * a + b - a % 3);
    document.getElementById("resultado").innerText = resultado.toString();
}
