function guardar(random) {
    localStorage.setItem('random', random.toString());
}
function recuperar() {
    var random = localStorage.getItem('random');
    var random_number = 0;
    if (random != null) {
        random_number = parseInt(random, 10);
    }
    return random_number;
}
function Adivinar() {
    var aleatorio;
    aleatorio = recuperar();
    var numero;
    var random = Math.random();
    if (aleatorio == 0) {
        aleatorio = Math.floor(random * 10);
        guardar(aleatorio);
    }
    numero = parseInt(document.getElementById("numero").value);
    if (numero == aleatorio) {
        Mensaje("Lograste adivinar!!!");
        localStorage.clear();
    }
    else {
        Mensaje("Sigue intentando");
        document.getElementById("numero").value = "";
    }
}
