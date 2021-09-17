/*
Desafio um , colocar um limitador de vezes a se chutar 
Desafio dois, dar uma pista sobre o chute 
*/

    var numeroSecreto = parseInt(Math.random() * 11);
    function Chutar() {
        for (let i=0; i<=3;i) {
       
      var elementoResultado = document.getElementById("resultado");
      var chute = parseInt(document.getElementById("valor").value);
     
         console.log(chute);
      if (chute == numeroSecreto) {
        elementoResultado.innerHTML = "Você acertou";
      } else if (chute > numeroSecreto) {
        elementoResultado.innerHTML = "Ops Oo o numero e menor ";
      } else if (chute < numeroSecreto) {
        elementoResultado.innerHTML = "Ops Oo o numero e maior ";
      } else if (chute > 10 || chute < 0) {
        elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
      }
    
        }elementoResultado.innerHTML = "Tentativas esgotadas , infelizmente vc não acertou :( " +numeroSecreto


}
    
   
 