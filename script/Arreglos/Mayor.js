const input = document.getElementById("numero")
var numeros = []

function guardar(numeros) {
  var numeros_json = JSON.stringify(numeros);
  localStorage.setItem('Numeros', numeros_json);
}

function aniadirNumero(){
  var numero = parseInt(input.value)
  numeros.push(numero);
  guardar(numeros);
}

function recuperar() {
  var Numeros_recup = localStorage.getItem('Numeros');
  var Numeros = JSON.parse(Numeros_recup);
  return Numeros;
}

function verificar(){
  var Numeros = recuperar();
  var i = 0;
  var mayor, menor;

  if (Numeros[0] > Numeros[1]){
    mayor = Numeros[0];
    menor = Numeros[1];
  }else{
    mayor= Numeros[1];
    menor = Numeros[0];
  }

  for (i= 2; i < Numeros.length; i++){
    if (mayor > Numeros[i]){
      mayor = Numeros[i];
      menor = Numeros[mayor]
    }else if(Numeros[i] < menor){
      menor = Numeros[i];
    }
  }
  localStorage.clear();
  Mensaje(`El numero mayor es ${mayor} y el menor ${menor}`)
}
