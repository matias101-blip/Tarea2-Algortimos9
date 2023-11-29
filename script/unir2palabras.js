function unir2palabras() {
    var palabra1, palabra2, unir;
    palabra1 = document.getElementById("palabra1").value;
    palabra2 = document.getElementById("palabra2").value;
    unir = palabra1 + palabra2
    console.log(unir);
    document.getElementById("unir").innerText =unir
}
