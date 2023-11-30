function negativoypositivo(){
    var num;
    num = document.getElementById("num").value;
    if  (num>0){
        mensaje = "POSITIVO";
        Mensaje(mensaje);
    } else if (num <0){
        mensaje = "NEGATIVO";
        Mensaje(mensaje);
    }else {
        mensaje = "Es cero";
        Mensaje(mensaje);
    } 
			
}