var listaFilmeNomes = [];
var listaFilmeImagens = [];

function adicionarFilme() {
  var filmeNome = document.getElementById("addNome").value;
  var filmeImagem = document.getElementById("addFilme").value;
  if (filmeImagem.endsWith(".jpg")) {
    listaFilmeNomes.push(filmeNome);
    listaFilmeImagens.push(filmeImagem);
    listarFilmesNaTela(listaFilmeNomes, listaFilmeImagens);
  } else {
    console.error("Endereço de filme inválido");
  }
  document.getElementById("addNome").value = "";
  document.getElementById("addFilme").value = "";
}

//Função para remover um filme de acordo com o índice DA TELA, e não do array.
function removerFilme() {
  var indiceFilme = parseInt(document.getElementById("remover").value);
  if (indiceFilme > 0) {
    listaFilmeNomes.splice(indiceFilme - 1, 1);
    listaFilmeImagens.splice(indiceFilme - 1, 1);
  }
  listarFilmesNaTela(listaFilmeNomes, listaFilmeImagens);
  document.getElementById("remover").value = "";
}

//Função para listar os filmes, percorrendo pelo array.
function listarFilmesNaTela(listaFilmeNomes, listaFilmeImagens) {
  var elementoListaFilmes = document.getElementById("listaFilmes");
  elementoListaFilmes.innerHTML = "";
  for (var i = 0; i < listaFilmeNomes.length; i++) {
    elementoListaFilmes.innerHTML +=
      "<figure><img src=" +
      listaFilmeImagens[i] +
      "><figcaption>" +
      (i + 1) +
      "-" +
      listaFilmeNomes[i] +
      "</figcaption></figure>";
  }
}
