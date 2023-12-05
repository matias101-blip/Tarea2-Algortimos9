function semana() {
    var dia;
    dia = parseInt(document.getElementById("dia").value);

    if (dia == 1){
        mensaje = "Domingo";
    Mensaje(mensaje);
    } else if (dia == 2) {
        mensaje = "Lunes";
        Mensaje(mensaje);
    } else if (dia == 3) {
        mensaje = "Martes";
        Mensaje(mensaje);
    } else if (dia == 4) {
        mensaje = "Miercoles";
        Mensaje(mensaje);
    } else if (dia == 5) {
        mensaje = "Jueves";
        Mensaje(mensaje);
    } else if (dia == 6) {
        mensaje = " Viernes";
        Mensaje(mensaje);
    } else if (dia == 7) {
        mensaje = "Sabado";
        Mensaje(mensaje);
    }
}