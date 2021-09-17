function Chutar() {
    var elementoResultado = document.getElementById("resultado")
    var chute = parseInt(documen.getElementById("valor").value);
    console.log(chute);
    if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou"
    } else if (chute > 10 || chute < 0) {
        elementResultado.innerHTML = "Você deve digitar um número de 0 a 10";
    } else {
        elementoResultado.innerHTML = "Errou, o número secreto era " + numeroSecreto;
    }
} 
