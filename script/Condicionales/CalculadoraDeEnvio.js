function CalculadoraDeEnvio(){
    var distancia;
    distancia=parseInt(document.getElementById("distancia").value);
    if(distancia<50){
        alert("El costo de su tarifa de envio es de 10$")
    }else if(distancia>=50){
        alert("El costo de su tarifa de envio es de 20$")
    }
}