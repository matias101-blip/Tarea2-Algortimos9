function Mayordeedad(){ 
    var edad;
    edad = document.getElementById("edad").value,10;
    if (edad >= 18){
        mensaje = "Eres mayor de edad ";
        Mensaje(mensaje);
    }else {
        mensaje = "Eres menor de edad";
        Mensaje(mensaje);
    }
}