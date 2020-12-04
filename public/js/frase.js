$("#botao-frase").click(fraseAleatoria); // BUsca botão e chama função ao clicar
$("#botao-frase-id").click(buscaFrase); // BUsca botão e chama função ao clicar

function fraseAleatoria(){
    $("#spinner").show(); // Mostra icone de carregamento
    $.get("http://localhost:3000/frases", trocaFraseAleatoria)
    .fail(function(){
        $("#erro").show(); // Mostra o erro na tela.
        setTimeout(function(){
            $("#erro").toggle() // Retira o erro da tela após 2 segundo
        },2000)
    }) // Faz a requisição AJAX, o fail é pra quando ocorre erro
    .always(function(){ // Always, chama sempre, se deu erro ou se deu sucesso.
        $("#spinner").toggle(); // Retira icone de carregamento
    })
}

function trocaFraseAleatoria(data){
    var frase = $(".frase"); // Busca a frase
    var numeroAleatorio = Math.floor(Math.random() * data.length); // Busca o total de frazes e gera uma posição aleatoria.
    frase.text(data[numeroAleatorio].texto); // Adiciona a frase na tela.
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}
function buscaFrase(){
    $("#spinner").show(); // Mostra icone de carregamento
    var fraseId = $("#frase-id").val(); // Busca valor do input
    var dados = { id: fraseId} ; 
    $.get("http://localhost:3000/frases",dados,trocaFrase)
    .fail(function(){
        $("#erro-id").show(); // Mostra o erro na tela.
        setTimeout(function(){
            $("#erro-id").toggle() // Retira o erro da tela após 2 segundo
        },2000)
    }) // Faz a requisição AJAX, o fail é pra quando ocorre erro
    .always(function(){ // Always, chama sempre, se deu erro ou se deu sucesso.
        $("#spinner").toggle(); // Retira icone de carregamento
    })
}

function trocaFrase(data){
    var frase = $(".frase"); // Busca a frase
    frase.text(data.texto); // Adiciona a frase na tela.
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
    

}