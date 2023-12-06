function servicio() {
    var horas, costo
    horas = document.getElementById("horas").value;
    costo = 25 
	costo = horas * costo
    if (horas > 10){
        descuento = 0.20  
		descuento = costo * descuento
		costo = costo - descuento
        Mensaje("Tienes descuento del 20%")
    } else{
        Mensaje(`El costo total de las horas de servicio son ${costo}`); 
    }
   
}