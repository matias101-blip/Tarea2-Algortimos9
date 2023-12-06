function descuento() {
    var precio, unidad, des, total
    precio = parseFloat(document.getElementById("precio").value);
    unidad = parseFloat(document.getElementById("unidad").value);
    total = precio * unidad 
    if  ((unidad >= 10) && (unidad  <= 50)){
        des = 0.05
    } else if ((unidad >= 51) && (unidad <= 100)){
        des = 0.10
    } else if (unidad > 100 ) {
        des = 0.15
    }
    total = total - (total * des)
    Mensaje(`${total}`);      
}