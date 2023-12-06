function DescuentoPorAntiguedad(){
    debugger;
    var antiguedad ;
    var descuento;
    var salario;
    var total; 
    salario=parseInt(document.getElementById("salario").value);
    antiguedad=parseInt(document.getElementById("antiguedad").value);
    if(antiguedad>=5){
        descuento=salario*0.05;
        total=descuento+salario;
        alert(`Su salario con bono por antiguedad es ${total}$`);
    }else if(antiguedad<5){
        alert(`No cumple los requisitos para el bono de antiguedad`);
    }
    
}