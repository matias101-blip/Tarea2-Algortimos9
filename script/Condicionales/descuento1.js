function descuento () {
    var precio, des, pf;
    precio = parseFloat(document.getElementById("precio").value);
    des = parseFloat(document.getElementById("des").value);
    des = des / 100
    pf = precio - (precio * des )
    mensaje = "Total con descuento es";
    Mensaje(`${pf}`);  
}