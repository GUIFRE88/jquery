var frase = $(".frase").text(); // Posiciona na classe do elemento HTML, e busca o texto dele.
var numPalavras = frase.split(/\S+/).length; // Verifica a quantidade de palavras no texto.
var tamanhoFrase = $("#tamanho-frase"); // Busca o elemento com esse ID. 

tamanhoFrase.text(numPalavras); // Passa o valor para o elemento selecionado.

var campo = $(".campo-digitacao"); // Busca o elemento pela classe. 

// Quando tiver o evento de INPUT no campo
campo.on("input", function(){ 
   
    var conteudo = campo.val(); // Acessa o valor digitado nos campos de TextArea ou Input

    var qtdPalavras = conteudo.split(/\S+/).length - 1; // Busca quantidade de palavras digitadas.
    $("#contador-palavras").text(qtdPalavras); // Joga o valor para o HTML.

    var qtdCaracteres = conteudo.length; // Busca a quantidade de letras. 
    $("#contador-caracteres").text(qtdCaracteres); // Joga o valor para o HTML.
}) 

var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus",function(){ // Quando estiver sobre o campo, mas apenas pega o primeiro click.
    var cronometroID = setInterval(function(){
        tempoRestante--; // Retira 1 da variavel de tempo.
        $("#tempo-digitacao").text(tempoRestante); // Joga o valor para o campo.
        if (tempoRestante < 1){
            campo.attr("disabled",true); // Fecha campo quando tempo zerar, alterando atributo do campo.
            clearInterval(cronometroID); // Finaliza a função setInterval
        }
    },1000);

})