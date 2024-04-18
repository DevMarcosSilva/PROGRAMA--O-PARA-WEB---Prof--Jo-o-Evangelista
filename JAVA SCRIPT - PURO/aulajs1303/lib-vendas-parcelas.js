function mostrarResultado() {
    // Obtém os valores dos números inseridos pelo usuário
    var resultado;
    const vl = parseFloat(document.getElementById('valor').value);
    const parc = parseInt(document.getElementById('parcelas').value);
    
    // Verifica se os valores inseridos são válidos
    if (!isNaN(vl) && !isNaN(parc) && parc >= 1) {
        // Verifica a quantidade de parcelas e calcula o resultado correspondente
        if (parc <= 1) {
            resultado = vl - (vl * 0.1);
            document.getElementById('resultado').innerText = `O valor com desconto foi: ${resultado}`;
        } else {
            // Calcula o valor da parcela com juros
            resultado = vl + (vl * 0.1);
            const valorParcela = resultado / parc;

            // Obtém a data atual
            const dataAtual = new Date();
			
				
            let output = '';

            // Imprime todas as parcelas com juros calculados e data de vencimento
            for (let i = 1; i <= parc; i++) {
                // Calcula a data de vencimento adicionando 30 dias à data atual
                const dataVencimento = new Date(dataAtual);
                dataVencimento.setDate(dataVencimento.getDate() + (30 * i));
                
                // Formata a data de vencimento no formato dd/mm/aaaa
                const dia = String(dataVencimento.getDate()).padStart(2, '0');
                const mes = String(dataVencimento.getMonth() + 1).padStart(2, '0');
                const ano = dataVencimento.getFullYear();
                const dataFormatada = `${dia}/${mes}/${ano}`;

                // Adiciona a parcela com juros e a data de vencimento ao output
                output += `Parcela ${i}: Valor ${valorParcela.toFixed(2)} - Vencimento ${dataFormatada}\n`;
            }

            document.getElementById('resultado').innerText = output;
        }
    } else {
        // Se os valores não forem válidos, exibe uma mensagem de erro
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos e uma quantidade de parcelas válida.';
    }
}




/*
function mostrarResultado() {
    // Obtém os valores dos números inseridos pelo usuário
    var resultado;
    const vl = parseFloat(document.getElementById('valor').value);
    const parc = parseInt(document.getElementById('parcelas').value);
    
    // Verifica se os valores inseridos são válidos
    if (!isNaN(vl) && !isNaN(parc) && parc >= 1) {
        // Verifica a quantidade de parcelas e calcula o resultado correspondente
        if (parc <= 1) {
            resultado = vl - (vl * 0.1);
            document.getElementById('resultado').innerText = `O valor com desconto foi: ${resultado}`;
        } else {
            // Calcula o valor da parcela com juros
            resultado = vl + (vl * 0.1);
            const valorParcela = resultado / parc;

            // Imprime todas as parcelas com juros calculados
            let output = '';
            for (let i = 1; i <= parc; i++) {
                output += `Parcela ${i}: ${valorParcela.toFixed(2)}\n`;
            }
            document.getElementById('resultado').innerText = output;
        }
    } else {
        // Se os valores não forem válidos, exibe uma mensagem de erro
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos e uma quantidade de parcelas válida.';
    }



