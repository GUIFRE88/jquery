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