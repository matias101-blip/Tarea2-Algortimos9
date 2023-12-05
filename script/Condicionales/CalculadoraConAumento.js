function CalculadoraConAumento(){
    var sueldo
    var aumento 
    var total
    sueldo=parseInt(document.getElementById("sueldo").value)
    aumento=parseInt(document.getElementById("aumento").value)
    total=sueldo+(sueldo*aumento/100)
    alert(`El sueldo con aumento es ${total}$`)
}