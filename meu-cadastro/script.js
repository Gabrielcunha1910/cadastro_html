function validar() {
    var titulo = document.getElementById("Titulo").value;
    var episodios = document.getElementById("Episodios").value;
    var descricao = document.getElementById("Descricao").value;
    var autor = document.getElementById("Autor").value;

    if (titulo == "" || episodios == "" || descricao == "" || autor == "") {
        alert("Preencha todos os campos antes de cadastrar.");
        return;
    }

    alert(
        "Cadastro realizado com sucesso!\n\n" +
        "Título: " + titulo + "\n" +
        "Episódios: " + episodios + "\n" +
        "Descrição: " + descricao + "\n" +
        "Autor: " + autor
    );

    document.querySelector("form").reset();
}