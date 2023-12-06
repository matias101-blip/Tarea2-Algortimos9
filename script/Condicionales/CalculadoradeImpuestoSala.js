function ImpuestoSala(){
    var salario;
    var total;
    var impuesto;
    salario=document.getElementById("salario").value;
    if((salario>=10000) &&(salario<20000)){
        impuesto=salario*0.10;
        total=salario-impuesto;
    }else if(salario>=20000){
        impuesto=salario*0.15;
        total=salario-impuesto;
    }
    alert(`Su salario con impuestos es ${total}$`);
}