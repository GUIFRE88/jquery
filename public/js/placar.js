$("#botao-placar").click(mostraPlacar); // Adiciona evento de click

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody"); // Busca dentro da section
    var usuario = "Guilherme";
    var numPalavras = $("#contador-palavras").text(); // Busca o numero de palavras
    var linha = novaLinha(usuario,numPalavras);

    linha.find(".botao-remover").click(removeLinha); // Adiciona a função ao clicar no botão.

    corpoTabela.append(linha); // Adiciona a linha no HTML
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
    $(this).parent().parent().remove();
}

function mostraPlacar(){
    $(".placar").slideToggle(); // Altera a propriedade CSS da section placar
}