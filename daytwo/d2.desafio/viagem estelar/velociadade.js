function Converter() {
    var unidadeConversao = document.getElementById("km");

    var km = unidadeConversao.value;
    var distancia= parseFloat(valor);
  
    var anosLuz = distancia * 0.00000000000010570
    console.log(anosLuz)
        var elementoValorConvertido =document.getElementById("distanciaConvertida")
       var distanciaConvertida = "O distancia percorrida a 85.654.900 km/h e de  " + anosLuz 
       elementoValorConvertido.innerHTML = distanciaConvertida
}