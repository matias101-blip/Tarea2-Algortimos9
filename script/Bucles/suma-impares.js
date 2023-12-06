function impares (){
    let suma = 0;
    let i = 1;
    
    while(i <= 100){
        if(i % 2 != 0){
            suma += i;
        }
        i++;
    }
    
    Mensaje(`La suma de los números impares del 1 al 100 es: ${+ suma}`)
}


