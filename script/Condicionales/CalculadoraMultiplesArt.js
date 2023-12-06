let articulos=[]
const inputarticulo=document.getElementById("articulos");

function AniadirArticulos(){
    var articulo =parseInt(inputarticulo.value)
    articulos.push(articulo);
    alert("El articulo fue agregado")
    inputarticulo.value=""
}

function CalculadoraMultiplesArt(){
    var subtotal=0
    var total
    var descuento = 0.10
    var i 
    for(i=0;i<articulos.length;i++){
        subtotal=subtotal+articulos[i]

    }
    if(subtotal>=100){
        descuento=descuento*subtotal;
    }
    total=subtotal-descuento;
    alert(`su total a pagar es de ${total}`)
    articulos=[]

}