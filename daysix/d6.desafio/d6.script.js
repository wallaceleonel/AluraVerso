var bibig = {nome:"bibig",vitorias:1,empates:2,derrotas:1,pontos:0};

function calculaJogor(){
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
}
