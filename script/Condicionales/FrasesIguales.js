function FrasesIguales(){
    var text1;
    var text2;
    text1=document.getElementById("text1").value;
    text2=document.getElementById("text2").value;
    if(text1==text2){
        alert("Las frases son iguales");
    }else{
        alert("Las frases no son iguales");
    }
}