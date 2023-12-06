function contadoralfabeto(){
    debugger;
    var palabra;
    var contador=0;
    palabra=document.getElementById("palabra").value;
    palabra=palabra.toLowerCase();
    for(i=0;i<palabra.length;i++){
        var letra=palabra[i];
        if((letra>="a")&&(letra<="z")){
            contador=contador+1
        }
    }
    alert(`El numero de caracteres es ${contador}`)
}