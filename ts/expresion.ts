function ejercicio1(){
  var a: number, b: number, resultado: string;
  a = parseInt((<HTMLInputElement>document.getElementById("a")).value);
  b = parseInt((<HTMLInputElement>document.getElementById("b")).value);

  resultado = `Resultado es: ${2 * a + b - a % 3}`;
  (<HTMLLabelElement>document.getElementById("resultado")).innerText = resultado.toString();
}
