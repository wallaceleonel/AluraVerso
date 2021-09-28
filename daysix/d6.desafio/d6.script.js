var jogadores = [];

function adicionarJogador() {
  var nome = document.getElementById("addNome").value;
  var foto = document.getElementById("addFoto").value;
  if (foto.endsWith(".jpg")) {
    jogadores.push({
      nome: nome,
      foto: foto,
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    });
  } else if (foto == "") {
    jogadores.push({
      nome: nome,
      foto:
        "https://icon2.cleanpng.com/20180323/see/kisspng-mystery-royalty-free-clip-art-mysterious-man-cliparts-5ab49f5896b3c7.1616473215217867126173.jpg",
      vitorias: 0,
      empates: 0,
      derrotas: 0,
      pontos: 0
    });
  } else {
    console.error("Insira um endereço válido.");
  }
  document.getElementById("addNome").value = "";
  document.getElementById("addFoto").value = "";
  exibeJogadoresNaTela(jogadores);
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates;
  return pontos;
}

function exibeJogadoresNaTela(jogadores) {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    elemento += "<tr><td><img src=" + jogadores[i].foto + "></td>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }

  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibeJogadoresNaTela(jogadores);
}

function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  exibeJogadoresNaTela(jogadores);
}

function resetarPontos() {
  for (var i = 0; i < jogadores.length; i++) {
    jogadores[i].vitorias = 0;
    jogadores[i].empates = 0;
    jogadores[i].derrotas = 0;
    jogadores[i].pontos = calculaPontos(jogadores[i]);
  }
  exibeJogadoresNaTela(jogadores);
}

function resetarTabela() {
  jogadores = [];
  exibeJogadoresNaTela(jogadores);
}
