function suma(){
  var numeros = [2 ,3 ,4 , 5]
  var sumaArray = 0;
  var i;
  for (i=0; i < numeros.length; i++){
    sumaArray = sumaArray + numeros[i];
  }
  Mensaje(`La suma de los elementos ${numeros} es = ${sumaArray}`);
}
