function SignoZodiacal(){
    debugger;
    var fecha = document.getElementById("fecha").value; //"02-12-2020"
    var MesDia = fecha.split("-");//["02", "12", "2020"]
    var mes = parseInt(MesDia[1]);
    var dia = parseInt(MesDia[2])
    switch(mes){
        case 1:
            if(dia<=19){
                alert("Tu signo es Capricornio");
            }else{
                alert("Tu signo es Acuario");
            }
        case 2:
            if(dia<=18){
                alert("Tu signo es Acuario");
            }else{
                alert("Tu signo es Picis");
            }
        case 3:
            if(dia<=20){
                alert("Tu signo es Picis");
            }else{
                alert("Tu signo es Aries");
            }
        case 4:
            if(dia<=19){
                alert("Tu signo es Aries");
            }else{
                alert("Tu signo es Tauro");
            }
        case 5:
            if(dia<=20){
                alert("Tu signo es Tauro");
            }else{
                alert("Tu signo es Geminis");
            }
        case 6:
            if(dia<=20){
                alert("Tu signo es Geminis");
            }else{
                alert("Tu signo es Cancer");
            }
        case 7:
            if(dia<=22){
                alert("Tu signo es Cancer");
            }else{
                alert("Tu signo es Leo");
            }
        case 8:
            if(dia<=22){
                alert("Tu signo es Leo");
            }else{
                alert("Tu signo es Virgo");
            } 
        case 9:
            if(dia <= 22){
                alert("Tu signo es Virgo");
            }else{
                alert("Tu signo es Libra");
            }
        case 10:
            if(dia <= 22){
                alert("Tu signo es Libra");
            }else {
                alert("Tu signo es Escorpio");
            }
        case 11:
            if(dia <= 21){
                alert("Tu signo es Escorpion");
            }else{
                alert("Tu signo es Sagitario");
            }
        case 12:
            if(dia<=21){
                alert("Tu signo es Sagitario");
            }else{
                alert("Tu signo es Capricornio");
            }  
    }
}
