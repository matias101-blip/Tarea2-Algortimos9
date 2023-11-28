let Notas = [], nota_num = 1;
const Notas_ul = <HTMLUListElement>document.getElementById("notas-ul");

function Optenerdatos() {
  var notas: number;
  notas = parseFloat((<HTMLInputElement>document.getElementById("nota")).value);
  return notas;
}

function aniadir_notas() {
  var nota: number;
  nota = Optenerdatos();
  Notas.push(nota)
  const nota_li = <HTMLLIElement>document.createElement("li");
  nota_li.textContent = `Nota ${nota_num ++}: ${nota}`;
  Notas_ul.appendChild(nota_li);

}

function Promediar() {
  if (Notas.length == 0) {
    alert("Ingrese notas porfavor");
  } else {
    let sub_promedio: number = 0, resultado: string
    for (var i: number = 0; i < Notas.length; i++) {
      sub_promedio = sub_promedio + Notas[i];
    }
    resultado = `El promedio es de: ${Math.round(sub_promedio / i)}`;
    (<HTMLLabelElement>document.getElementById("promedio")).innerText = resultado;
    Notas = [];
    while (Notas_ul.firstChild) {
      Notas_ul.removeChild(Notas_ul.firstChild);
    }
    nota_num = 1;
  }
}
