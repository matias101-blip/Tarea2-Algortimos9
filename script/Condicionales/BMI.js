function bmi() {
    var peso, estatura, imc;
peso = document.getElementById("peso").value;
estatura = document.getElementById("estatura").value;
    imc = peso/ (estatura*estatura);
    if (imc <= 18.4){
        mensaje = "Bajo de peso";
        Mensaje(mensaje);
    } else if (imc >= 18.5 && imc <= 24.9){
        mensaje = "Peso normal";
        Mensaje(mensaje);
    } else if (imc >= 25 && imc <= 29.9){
         mensaje = "Sobrepeso";
         Mensaje(mensaje);
    } else if (imc >= 30 ){
        mensaje = "Obesidad";
        Mensaje(mensaje);
    }	
}