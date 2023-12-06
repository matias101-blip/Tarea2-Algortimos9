function anuales() {
    var compras;
    compras = document.getElementById("compras").value;
    if (compras >=500){
        mensaje = "Tienes un descuento del 10% en tu proxima compras";
        Mensaje(mensaje);
    } else {
        mensaje = "No cumples con los requisitos";
        Mensaje(mensaje);
    }
}