function quincena(){
    var dia 
	dia = document.getElementById("dia").value;
	if (dia <= 15){
        mensaje = "Pertenece a la primera quincena";
        Mensaje(mensaje);
    } else if ((dia >= 16) && (dia <= 31)) {
        mensaje = "Pertenece a la segunda quincena";
        Mensaje(mensaje);
    } else {
        mensaje = "Dia no valido";
        Mensaje(mensaje);
    }

}