function añoBisiesto() {
    var año;
    año = document.getElementById("anio").value;
    if ((año % 4 == 0) && (año % 100 == 0) || (año % 400 == 0)) {
        mensaje = "El año es bisiesto";
        Mensaje(mensaje);
    } else {
        Mensaje("El año no es bisiesto");
    }
}
