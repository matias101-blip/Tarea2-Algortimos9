function parOimpar(){
   var num1, resultado;
   num1 = document.getElementById("num1").value;
   if (num1 %2 == 0) {
    document.getElementById("mostrar").innerText ="Par"
   } else {
    document.getElementById("mostrar").innerText ="Impar"
   }
}