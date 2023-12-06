function SumaNumerosPares(){
  var sumaPares = 0;
  var i;
  for(i=1; i <= 50; i++){
    if(i % 2 == 0){
      sumaPares = sumaPares + i;
    }
  }
  Mensaje(`La suma de los pares es ${sumaPares}`);
}
