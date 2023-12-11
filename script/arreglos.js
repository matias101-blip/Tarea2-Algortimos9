function Contador(){
    debugger;
    var arreglo = [1,2,3,4,5,6,7,8,9,10]
    var i 
    var contador=0
    var suma=0
    for(i=0;i<arreglo.length;i++){
        var numero = arreglo[i]
        if(numero%2 == 0){
            suma=numero+suma
        }
    }
    alert(suma)
}
/*promediar nota
let notas=[]
function Notas(){
    debugger;
    var input=document.getElementById("frase")
    var nota=parseInt(input.value);
    notas.push(nota)
    input.value=""
}

function Promediar(){
    debugger;
    var suma=0
    var i 
    var promedio
    for(i=0;i<notas.length;i++){
        suma=suma+notas[i]
    }
    promedio=suma/notas.length
    alert(promedio)
    notas=[]
}*/


/*function numeros() {

    var arreglo = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var i
    var suma = 0
    for (i = 0; i < 20; i++) {
        var numero = arreglo[i]
        suma = numero + suma
    }
    alert(suma)
}

let correos = []

function AgregarCorreos(){
    var input=document.getElementById("frase");
    var correo=input.value 
    correos.push(correo)
}

function VerCorreo(){
    debugger;
    var input=document.getElementById("numerodecorreo");
    var NumeroCorreo=parseInt(input.value)
    alert(correos[NumeroCorreo])
}*/