let vendas = [];

function cadastrar() {
    let nomeVendedor = document.getElementById("nomeVendedor").value
    let valorVenda = parseFloat(document.getElementById("valorVenda").value)

    if (nomeVendedor && valorVenda) {
        let desconto = 0.1
        let valorComDesconto = valorVenda*(1-desconto)

        let venda = {
            id: vendas.length + 1,
            nomeVendedor: nomeVendedor,
            valorVenda: valorVenda,
            desconto: desconto,
            valorComDesconto: valorComDesconto.toFixed(2) // 2 casas decimais
        }

        vendas.push(venda)
        document.getElementById("formVenda").reset() // limpa os campos de input
        exibirVendas()

    } else {
        alert("Insira todos os campos")
    }

}

function exibirVendas() {
    let corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = ""; // Limpa o conteúdo atual da tabela

    for (let venda of vendas) {
        let novaLinha = corpoTabela.insertRow(); // Cria uma nova linha na tabela

        // Insere as células na linha
        let idCell = novaLinha.insertCell();
        let nomeVendedorCell = novaLinha.insertCell();
        let valorVendaCell = novaLinha.insertCell();
        let descontoCell = novaLinha.insertCell();
        let valorComDescontoCell = novaLinha.insertCell();
        let acoesCell = novaLinha.insertCell();

        // Define o conteúdo das células
        idCell.textContent = venda.id;
        nomeVendedorCell.textContent = venda.nomeVendedor;
        valorVendaCell.textContent = venda.valorVenda.toFixed(2);
        descontoCell.textContent = (venda.desconto * 100).toFixed(0) + "%";
        valorComDescontoCell.textContent = venda.valorComDesconto;
    }
}


function limparCampos() {
    if (vendas.length > 0) {
        vendas = []
        exibirVendas()
    } else {
        alert("Não existe venda para limpar!")
    }
}

function removerUltimoElemento() {
    if (vendas.length > 0) {
        vendas.pop()
        exibirVendas()
    } else {
        alert("Não existe venda para remover!")
    }
}
