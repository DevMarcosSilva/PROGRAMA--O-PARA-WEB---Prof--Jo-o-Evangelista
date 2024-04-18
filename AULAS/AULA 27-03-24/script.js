// Array para armazenar instâncias da classe CalcularMedia
let vendas = [];

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    const valorVendas = parseFloat(document.getElementById('valor_vendas').value);

    if (!isNaN(valorVendas)) {
        const calculadora = new CalcularMedia(valorVendas);
        vendas.push(calculadora); // Adiciona a nova instância ao vetor
        document.getElementById('resultado').innerText = `Venda adicionada: ${valorVendas}`;
    } else {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido para as vendas.';
    }

    // Exibe os resultados
    exibirVendas();
});

class CalcularMedia {
    constructor(valorVendas) {
        this.valorVendas = valorVendas;
    }

    calcularMedia() {

        const total = this.vendas
        return this.valorVendas;

    }
}

function exibirVendas() {
    let vendasString = "Vendas: ";
    for (let i = 0; i < vendas.length; i++) {
        vendasString += vendas[i].calcularMedia() + ", ";
    }
    document.getElementById('resultado').innerText = vendasString;
    console.log(vendas)
}
