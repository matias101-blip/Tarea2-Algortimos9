function mayorde3num() {
    var num1, num2, num3;
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    num3 = document.getElementById("num3").value;
    if (num1>= num2 && num1 >= num3){
       document.getElementById("resultado").innerText = `El numero ${num1} es mayor.`;
    } else if (num2 >= num1 && num2 >= num3){
        document.getElementById("resultado").innerText = `El numero ${num2} es mayor.`;
    } else {
        document.getElementById("resultado").innerText = `El numero ${num3} es mayor.`;
    }
}