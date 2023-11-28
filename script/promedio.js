var Notas = [], nota_num = 1;
var Notas_ul = document.getElementById("notas-ul");
function Optenerdatos() {
    var notas;
    notas = parseFloat(document.getElementById("nota").value);
    return notas;
}
function aniadir_notas() {
    var nota;
    nota = Optenerdatos();
    Notas.push(nota);
    var nota_li = document.createElement("li");
    nota_li.textContent = "Nota ".concat(nota_num++, ": ").concat(nota);
    Notas_ul.appendChild(nota_li);
}
function Promediar() {
    if (Notas.length == 0) {
        alert("Ingrese notas porfavor");
    }
    else {
        var sub_promedio = 0, resultado = void 0;
        for (var i = 0; i < Notas.length; i++) {
            sub_promedio = sub_promedio + Notas[i];
        }
        resultado = "El promedio es de: ".concat(Math.round(sub_promedio / i));
        document.getElementById("promedio").innerText = resultado;
        Notas = [];
        while (Notas_ul.firstChild) {
            Notas_ul.removeChild(Notas_ul.firstChild);
        }
        nota_num = 1;
    }
}
