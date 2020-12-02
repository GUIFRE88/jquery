var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao"); // Busca o elemento pela classe. 

// Chama esse trecho após o carregamento total da página
$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicalizaCronometro();
    inicializaMarcadores();

    // Quando clicar no botão.
    $("#botao-reiniciar").click(reiniciaJogo);
})

function atualizaTamanhoFrase(){
    var frase = $(".frase").text(); // Posiciona na classe do elemento HTML, e busca o texto dele.
    var numPalavras = frase.split(/\S+/).length; // Verifica a quantidade de palavras no texto.
    var tamanhoFrase = $("#tamanho-frase"); // Busca o elemento com esse ID. 
    
    tamanhoFrase.text(numPalavras); // Passa o valor para o elemento selecionado.    
}

function inicializaContadores(){
    // Quando tiver o evento de INPUT no campo
    campo.on("input", function(){ 
    
        var conteudo = campo.val(); // Acessa o valor digitado nos campos de TextArea ou Input

        var qtdPalavras = conteudo.split(/\S+/).length - 1; // Busca quantidade de palavras digitadas.
        $("#contador-palavras").text(qtdPalavras); // Joga o valor para o HTML.

        var qtdCaracteres = conteudo.length; // Busca a quantidade de letras. 
        $("#contador-caracteres").text(qtdCaracteres); // Joga o valor para o HTML.
    }) 
}

function inicializaMarcadores(){
    campo.on("input",function(){
        var frase = $(".frase").text(); // Busca o valor total do texto.
        var digitado = campo.val(); // Busca o valor digitado.
        var comparavel = frase.substr(0,digitado.length) // Busca a frase, de acordo com o tamanho digitado.
        if(digitado == comparavel){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    })
}

function inicalizaCronometro(){
    var tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus",function(){ // Quando estiver sobre o campo, mas apenas pega o primeiro click.
        var cronometroID = setInterval(function(){
            tempoRestante--; // Retira 1 da variavel de tempo.
            $("#tempo-digitacao").text(tempoRestante); // Joga o valor para o campo.
            if (tempoRestante < 1){
                clearInterval(cronometroID); // Finaliza a função setInterval
                finalizaJogo()
            }
        },1000);
    })
}

function finalizaJogo(){
    campo.attr("disabled",true); // Fecha campo quando tempo zerar, alterando atributo do campo.           
    campo.toggleClass("campo-desativado"); // Adiciona uma classe CSS ao campo, alterando assim o CSS do campo, caso a classe ja não exista. 
    inserePlacar() // Chama função para adicionar user ao placar.
}

function reiniciaJogo(){
    campo.attr("disabled",false); // Habila o campo.
    campo.val("") // Limpa o campo de texto.
    campo.toggleClass("campo-desativado"); // Remove a classe CSS que foi adicionada anteriormente, caso ela exista, se nao tiver a classe adiciona ela. 
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
    $("#contador-palavras").text("0") // Zera o contador.
    $("#contador-caracteres").text("0") // Zera o contador.
    $("#tempo-digitacao").text(tempoInicial) // Volta o tempo inical.
    inicalizaCronometro(); // Inializa os cronometro.
}