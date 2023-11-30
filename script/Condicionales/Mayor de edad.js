function Mayordeedad(){ 
    var edad;
    edad = document.getElementById("edad").value,10;
    if (edad >= 18){
        mensaje = "Puedes votar";
        Mensaje(mensaje);
    }else {
       mensaje = "No puedes votar";
        Mensaje(mensaje);
    }
}