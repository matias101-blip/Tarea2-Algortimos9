function contarVocales(){
    var texto = document.getElementById("texto").value;
    var terminado = false;
    var i = 0;
    var contador = 0

    while(terminado == false){
        if (i == texto.length){
            terminado = true;
        }else{
            var caracter = texto[i]
            if(caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u"){
                contador = contador + 1
            }
            i = i + 1
        }
    }
    alert(`Hay ${contador} de vocales`)
}