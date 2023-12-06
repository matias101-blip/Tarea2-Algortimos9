const tabla = document.getElementById("tabla");

function Multiplicar(){
  debugger
  var numero = parseInt(document.getElementById("numero").value);
  var i = 0
  var multiplicar;
  for (i=1; i <= 12; i++){
    multiplicar = numero * i;
    var td = document.createElement("td");
    var tr = document.createElement("tr");
    td.textContent = `${numero} x ${i} = ${multiplicar}`;
    tr.appendChild(td);
    tabla.appendChild(tr);
  }
}
