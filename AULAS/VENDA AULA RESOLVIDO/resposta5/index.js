class Vendas{
  constructor(valor){
    this.valor = valor
    this.addVenda(valor)
  }

  addVenda(valor) {
    vendas.push(valor)
  }

  maiorVenda(){
    return Math.max(...vendas)
  }

  mediaVendas(){
    let soma = vendas.reduce( (acc, cur) => acc + cur, 0)
    return soma / vendas.length || 0;
  }

}

var vendas = []
document.getElementById('formulario').addEventListener('submit', (event) => {
  event.preventDefault();

  const valor = parseFloat(document.getElementById('valor').value)

  if (isNaN(valor)){
    document.getElementById('maior_venda').innerText = 'Digite um valor válido'
    return
  }

  const vendas = new Vendas(valor);

  let maior_venda = vendas.maiorVenda();
  let media_vendas = vendas.mediaVendas();

  document.getElementById('maior_venda').innerText = `A maior venda foi de ${maior_venda}`
  document.getElementById('media_venda').innerText = `A média de vendas foi de ${media_vendas}`
  
  document.getElementById('lista_vendas').innerHTML = ''
  for (let i = 0; i < this.vendas.length; i++){
    document.getElementById('lista_vendas').innerHTML += `<li>${i + 1} Venda: ${this.vendas[i]}</li>`
  }

})
