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
