"use strict";
function Sumar2numeros(numero1, numero2) {
    var suma;
    suma = "La suma de ".concat(numero1, " + ").concat(numero2, " es ").concat(numero1 + numero2);
    Mensaje(suma);
}
function Multiplicar2Numeros() {
    var numero1, numero2, resultado;
    numero1 = 10;
    numero2 = 13;
    resultado = "La multiplicacion de ".concat(numero1, " * ").concat(numero2, " es ").concat(numero1 * numero2);
    return resultado;
}
function ParoImpar() {
    var numero, resultado;
    numero = 2;
    resultado = numero % 2;
    if (resultado == 0) {
        var mensaje = "El numero ingresado es par";
        Mensaje(mensaje);
    }
    else {
        var mensaje = "El numero ingresado es impar";
        Mensaje(mensaje);
    }
}
function AreaTriangulo(base, altura) {
    var area;
    area = base * altura;
    return area;
}
var resultado, area, base, altura;
base = 10;
altura = 5;
area = AreaTriangulo(base, altura);
resultado = "EL area del triangulo es ".concat(area);
Mensaje(resultado);
