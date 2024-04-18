const formulario = document.getElementById("formulario");
const valorInput = document.getElementById("valor");
const view = document.getElementById("view");
class Calculos {
  listaVendas = [];

  constructor() {}

  adicionar(num) {
    this.listaVendas.push(Number(num));

    view.innerHTML = `
      <table>
        <tr>
          <td>Maior venda:</td>
          <td>${this.maiorVenda()}</td>
        </tr>
        <tr>
          <td>Média de vendas:</td>
          <td>${this.mediaVendas()}</td>
        </tr>
        ${this.listaVendas.map((venda) => {
          return `
            <tr>
              <td>Venda:</td>
              <td>${venda}</td>
            </tr>
          `;
        })}
      </table>
    `;
  }

  maiorVenda() {
    return Math.max(...this.listaVendas);
  }

  mediaVendas() {
    const totalVendas = this.listaVendas.reduce((a, b) => a + b);
    const media = totalVendas / this.listaVendas.length;
    return media.toFixed(2);
  }
}

const calculos = new Calculos();

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!valorInput.value) {
    alert("Insira o valor");
    return;
  }

  calculos.adicionar(valorInput.value);
});
