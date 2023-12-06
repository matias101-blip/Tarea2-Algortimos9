function suma() {
    let suma = 0;
    let numero = 0;

    while (numero >= 0) {
        numero = parseInt(prompt("Ingresa un numeros ( si ingresa un número negativo termina):"));
        if (numero >= 0) {
            suma += numero;
        }
    }

    Mensaje(`La suma de los números positivos ingresados es:  ${+ suma}`);

}