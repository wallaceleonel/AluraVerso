function Converteruss() {
    var valorElemento = document.getElementById("valor");

    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5
    console.log(valorEmReal)
        var elementoValorConvertido =document.getElementById("valorConvertido")
       var valorConvertido = "O resultado em real é R$ " + valorEmReal
       elementoValorConvertido.innerHTML = valorConvertido
}
function Converteruk(){
    var valorElemento = document.getElementById("valor");

    var valor = valorElemento.value;
    var valor = valorEmLibra = parseFloat(valor);

    var valorEmReal = valorEmLibra * 6
    console.log(valorEmReal)
        var elementoValorConvertido = document.getElementById("valorConvertido")
        var valorConvertido = "o resultado em libra é " + valorEmReal
        elementoValorConvertido.innerHTML = valorConvertido
}