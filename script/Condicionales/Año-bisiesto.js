function añobisiesto(){
var año;
año = document.getElementById("anio").value;
if ((año % 4 == 0) && (año % 100 == 0) (año % 400 == 0)){
    mensaje = "El aaño es bisisesto";
    Mensaje(mensaje);
} else {
    Mensaje("El año no es bisisesto");
}
}