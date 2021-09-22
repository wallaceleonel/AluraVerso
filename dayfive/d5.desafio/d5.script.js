function adicionarFilme() {
    
    var filmeFavorito = document.getElementById("filme").value;
    if (filmeFavorito.endsWith("jpg")){
    listarFilmesNaTela(filmeFavorito);
}else{
    console.error("Endereço não e valido");
}
  document.getElementById("filme").value;
}
    document.getElementById("filme").value;
function listarFilmesNaTela(filme) {
    var elementoFilmeFavorito = "img src=" +filmeFavorito + ">"
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML +elementoFilmeFavorito;
    
}