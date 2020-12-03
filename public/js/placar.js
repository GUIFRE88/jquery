$("#botao-placar").click(mostraPlacar); // Adiciona evento de click

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody"); // Busca dentro da section
    var usuario = "Guilherme";
    var numPalavras = $("#contador-palavras").text(); // Busca o numero de palavras
    var linha = novaLinha(usuario,numPalavras);

    linha.find(".botao-remover").click(removeLinha); // Adiciona a função ao clicar no botão.

    corpoTabela.append(linha); // Adiciona a linha no HTML

    $(".placar").slideDown(500); // Mostra o Placar automaticamente

    scrollPlacar(); // Scroll do placar, joga a tela para baixo.

}
 
function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top; // Busca a posição do placar em pixel
    $("body").animate({
        scrollTop: posicaoPlacar+"px"
    },500);
}

function novaLinha(usuario,numPalavras){

    var linha = $("<tr>"); // Cria elemento em HTML por jquery
    var colunaUsuario = $("<td>").text(usuario); 
    var colunaPalavras = $("<td>").text(numPalavras); 
    var colunaRemover = $("<td>"); 
    var link = $("<a>").addClass("botao-remover").attr("href","#");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone); // Adicionado o icone dentro do link
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event){
    event.preventDefault(); // Retira comportamento padrão do link, de jogar para o inicio da página.
    var linha = $(this).parent().parent()
    linha.fadeOut(1000); // Remove a linha com fade, diminuindo a opacidade e não excluindo totalmente.
    setTimeout(function(){
        linha.remove(); // Remove realmente a linha
    },1000)
    
}

function mostraPlacar(){
    // .stop() -  Para o processo e continua o outro, caso o usuário aperte várias vezes o mesmo botão.
    $(".placar").stop().slideToggle(); // Altera a propriedade CSS da section placar
}