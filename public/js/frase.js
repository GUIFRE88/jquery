$("#botao-frase").click(fraseAleatoria); // BUsca botão e chama função ao clicar

function fraseAleatoria(){
    $.get("http://localhost:3000/frases", trocaFraseAleatoria); // Faz a requisição AJAX
}

function trocaFraseAleatoria(data){
    var frase = $(".frase"); // Busca a frase
    var numeroAleatorio = Math.floor(Math.random() * data.length); // Busca o total de frazes e gera uma posição aleatoria.
    frase.text(data[numeroAleatorio].texto); // Adiciona a frase na tela.
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}