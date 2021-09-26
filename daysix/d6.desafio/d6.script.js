var bibig = {nome:"bibig",vitorias:1,empates:2,derrotas:1,pontos:0};
var tigas = {nome:"bibig",vitorias:1,empates:2,derrotas:1,pontos:0};

function calculaJogor(){
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}
function calcularPontos(jogador){
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}

bibig.pontos = calcularPontos(bibig);
tigas.pontos = calcularPontos(tigas);

var jogadores = [bibig.tigas];

function exibirJogadoresNatela(jogadores){
    var elemento = ""
    for (var  i = 0; i < jogadores.length; i++){
        elemento += "<tr><td>"+ jogadores[i] + "</td>"
        elemento += "<td>"+ jogadores[i].vitorias + "</td>"
        elemento += "<td>"+ jogadores[i].empates + "</td>"
        elemento += "<td>"+jogadores[i].derrotas +"</td>"
        elemento += "<td>"+jogadores[i].pontos +"</td>"
        elemento += "<td><button onClick= 'adicionarVitoria()'>Vitoria</button></td>"
        elemento += "<td><button onClick= 'adicionarEmpate()'>Empate</button></td>"
        elemento += "<td><button onClick= 'adicionarDerrota()'>Derrota</button></td>"
        elemento += "</tr>"

    
    }
    var tabelaJogadores = 
   document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento
}
exibirJogadoresNatela(jogadores);