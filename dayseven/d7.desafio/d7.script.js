
var carta1 ={
    nome: "Chrmander",
    atributos:{
        ataque: 8,
        desfesa: 5,
        fogo : 6,
    }
};
var carta2 ={
    nome: "Snorlax",
    atributos:{
        ataque: 4,
        desfesa: 9,
        fogo : 2,
    }
};
var carta3 ={
    nome: "rosita",
    atributos:{
        ataque: 8,
        desfesa: 3,
        fogo : 9,
    }
};

var cartas =[carta1,carta2,carta3]
var cartaMaquina = 0
var cartaJogador = 0

function sortearCarta(){
  var numeroCartaMaquina = parseInt(Math.random * 3);
  cartaMaquina =cartas[numeroCartaMaquina];
while (numeroCartaMaquina == numeroCartaJogador){
    var numeroCartaMaquina = parseInt(Math.random * 3);
}
  var numeroCartaJogador = parseInt(Math.random * 3);
  cartaJogador =cartas[numeroCartaJogador];

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;

  exibirOpcoes()
}


function exibirOpcoes(){
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""

    for (var atributo in cartaJogador.atributos){
        opcoesTexto +=
        "<input type ='radio' ,name='atributo','value=" + atributo + "'> "+ atributo ;
    }
    opcoes.innerHTML =opcoesTexto
}

function obtemAtributoSelecionado (){
     var radioAtributo = document.getElementsByName ("atributo");

     for (var i = 0; i <radioAtributo.length; i ++ ) {
         if (radioAtributo[i].checked == true){
             return radioAtributo[i].value
         }
     }

}
function  jogar (){
    var atributoSelecionado = obtemAtributoSelecionado()
    
}