// Classe para manipular as vendas
class RegistroVendas {
  constructor() {
    this.vendas = [];
  }

  registrarVenda(valor) {
    this.vendas.push(valor);
  }

  calcularMaiorVenda() {
    return Math.max(...this.vendas);
  }

  calcularMediaVendas() {
    const total = this.vendas.reduce((acc, cur) => acc + cur, 0);
    return total / this.vendas.length || 0;
  }

  gerarListaVendasHTML() {
    return this.vendas.map(venda => `<li>${venda}</li>`).join('');
  }
}

const registro = new RegistroVendas();

document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();

  const valorVenda = parseFloat(document.getElementById('valorVenda').value);

  if (isNaN(valorVenda)) {
    alert("Por favor, insira um valor válido.");
    return;
  }

  registro.registrarVenda(valorVenda);

  document.getElementById('maiorVenda').innerText = `Maior venda efetuada: ${registro.calcularMaiorVenda()}`;
  document.getElementById('mediaVendas').innerText = `Média das vendas efetuadas: ${registro.calcularMediaVendas().toFixed(2)}`;
  document.getElementById('listaVendas').innerHTML = registro.gerarListaVendasHTML();
});