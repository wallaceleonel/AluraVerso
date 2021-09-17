function ConverterTemp() {
    var temperaturaElemento = document.getElementById("valor");
  
    var valor = temperaturaElemento.value;
  
    var valor = (tempKelvin = parseFloat(valor));
    var valor = (tempFarenheit = parseFloat(valor));
  
    var temperaturaKelvin = tempKelvin + 273;
    var temperaturaFarenheit = tempFarenheit * 5;
  
    console.log(temperaturaKelvin);
    var elementoValorConvertido = document.getElementById("tempConvertido");
    var tempConvertido = "a temperatura em Kelvin é : " + temperaturaKelvin;
    elementoValorConvertido.innerHTML = tempConvertido;
  
    console.log(temperaturaFarenheit);
    var elementoValor = document.getElementById("Convertido");
    var Convertido = "a temperatura em Farenheit é : " + temperaturaFarenheit;
    elementoValor.innerHTML = Convertido;
  }



 