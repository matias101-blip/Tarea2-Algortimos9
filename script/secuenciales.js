function Ejercicio_11(){
	// Digite las variable de entrada
	var a , b , resultado
	// Digite el valor de las variables
	a = parseInt(document.getElementById("a").value)
	b = parseInt(document.getElementById("b").value)
	// Digite los operadores correspondiente
	resultado = " suma = ".concat( a + b );
	// Mostrar por pantalla el resultado de esa operacion
	alert(resultado);
}

function Ejercicio_12(){
	// Digite las variable de entrada
	var altura , base , resultado
	// Digite el valor de las variables y usar el comando Leer 
     altura = parseInt(document.getElementById("altura").value);
	 base = parseInt(document.getElementById("base").value);
	// Digite los operadores correspondiente
	resultado = " el area es = ".concat( base * altura / 2 );
	// Mostrar por pantalla el resultado de esa operacion
	alert(resultado); 
}

function Ejercicio_13(){
	// Digite las variable de entrada
	var a, b , resultado ; 
   
	// Digite el valor de las variables y usar el comando Leer 
	a = parseInt(document.getElementById("a").value)
	// Digite los operadores correspondiente
    b = a % 2;
	// usar el comando si- Entonces
 	// luego determinar la variable que digito 
   if ( b === 0 ){
    resultado = "es par"
    alert(resultado)
   }
   else {
    resultado = "in par"
    alert(resultado)
  }
  

  return resultado;

  
}  




function suma(){
     var  x = parseInt(document.getElementById("valor1").value)
     var  y = parseInt(document.getElementById("valor2").value)
      document.getElementById("resultado").innerText = (x+y)
 }
function restar (){
     var  x = parseInt(document.getElementById("valor1").value)
     var  y = parseInt(document.getElementById("valor2").value)
     document.getElementById("resultado").innerText = ( x - y)

}
function multiplicar(){
     var x = parseInt(document.getElementById("valor1").value)
     var y = parseInt(document.getElementById("valor2").value)
    document.getElementById("resultado").innerText = ( x * y )
}
function dividir(){
     var x = parseInt(document.getElementById("valor1").value)
     var y = parseInt(document.getElementById("valor2").value)
    document.getElementById("resultado").innerText = (x/y)
}

function Ejercicio_15(){
	// Digite las variable de entrada
	  var x, y , z , contador, resp
	// Digite el valor de las variables 
	x = parseInt(document.getElementById("desde").value);
    y = parseInt(document.getElementById("hasta").value);
    z = parseInt(document.getElementById("por").value);
	// Luego hacer que el valor que digito el usuario lo miltiplique hasta el 10
	contador =  x
    document.getElementById("resul").innerText = ` tabla del =  ${z} `
    while ( contador <= y ){
      resp = contador * z
    console.log(`${contador}  * ${z}  = ${resp}`);
    document.getElementById("resul").innerText+= ` br ${contador}  * ${z}  =   ${resp}` 
      contador = contador + 1
    }
}
function  Ejercicio_16 (){
	// Digite las variable de entrada
	var x , y ,
	// Digite el valor de las variables y usar el comando Leer
	x = document.getElementById("frase1").value
	y = document.getElementById("frase2").value
	// Mostrar por pamtalla los caracteres concatenedas osea unidos
    document.getElementById("re").innerText = x + " " + y;

	
}