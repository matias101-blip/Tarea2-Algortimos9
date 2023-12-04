"use strict";
function Ejercicio1() {
    var a, b, resultado;
    a = 3;
    b = 7;
    resultado = "y = ".concat(2 * a + b - a % 3);
    Mensaje(resultado);
}
function Ejercicio2() {
    var a, b, resultado;
    a = 10;
    b = 4;
    resultado = "z = ".concat(a * b + 3 % a + b);
    Mensaje(resultado);
}
function Ejercicio3() {
    var a, b, resultado;
    a = 6;
    b = 4;
    resultado = "w = ".concat(a - b + 2 * a % b);
    Mensaje(resultado);
}
function Ejercicio4() {
    var a, b, resultado;
    a = 8;
    b = 5;
    resultado = "v = ".concat(2 * b + a / 2 + 4 * b % a);
    Mensaje(resultado);
}
function Ejercicio5() {
    var a, b, resultado;
    a = 12;
    b = 9;
    resultado = "u = ".concat(b - a + 3 * a % b);
    Mensaje(resultado);
}
function VerdaderoOfalso(res) {
    var text;
    if (res == true) {
        text = "Verdadero";
    }
    else {
        text = "Falso";
    }
    return text;
}
function Ejercicio6() {
    var resultado, res, text;
    res = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3;
    text = VerdaderoOfalso(res);
    resultado = "(5 + 3 * 2) + 9 > 3 * 5 * 14 % 3 = ".concat(text);
    Mensaje(resultado);
}
function Ejercicio7() {
    var resultado;
    resultado = "Resultado = ".concat(2 * (4 - 10 + 8) / 2 * 36 * (1 / 2));
    Mensaje(resultado);
}
function Ejercicio8() {
    var resultado;
    resultado = "Resultado = ".concat(260 / 12 + 54 % 3 - 85 % 7);
    Mensaje(resultado);
}
function Ejercicio9() {
    var resultado, res, text;
    res = (48 < 2 * 3) || (2 * 7 < 12);
    text = VerdaderoOfalso(res);
    resultado = "(48 < 2 * 3) || (2 * 7 < 12) = ".concat(text);
    Mensaje(resultado);
}
function Ejercicio10() {
    var resultado, res, text, a, b;
    a = 2;
    b = 4;
    res = ((8 > 2) || (932 < 23)) && a == b;
    text = VerdaderoOfalso(res);
    resultado = "((8 > 2) | | (932 < 23) ) && 4==2 = ".concat(text);
    Mensaje(resultado);
}
