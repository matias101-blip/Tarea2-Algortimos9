const contador = document.getElementById("contador")
function cuenta(numero){
    debugger
    var numero;
    if(numero == 0){
        clearTimeout();
    }else{
        setTimeout(function(){
            contador.innerText=`${numero}`
            cuenta(numero -1);
        },300)
        return numero
    }

}

function iniciarcuenta(){
    var numero; 
    numero = parseInt(prompt("Ingrese un número :"));
    cuenta(numero)
}