function resultado() {
  const valor_venda = parseFloat(document.getElementById('valor_venda').value)
  const parcela = parseFloat(document.getElementById('qtda_parc').value)

  if (parcela == 1) {
    result = valor_venda * 0.10

    document.getElementById('resultado').innerText = `Pagamento à vista R$ ${valor_venda - result}`
  }

  if (parcela > 1 && parcela < 4) {
    result = (valor_venda * 0.05) / parcela;
    document.getElementById('resultado').innerText = `Pagamento em até 3x`
    for (let i = 1; i <= parcela; i++) {
      document.getElementById('resultado').innerText += `\n ${i}º Parcela  R$ ${valor_venda + result}`
    }
  }
  if (parcela >= 4) {
    result = (valor_venda * 0.10) / parcela;
    document.getElementById('resultado').innerText = `Pagamento acima de 4x`
    for (let i = 1; i <= parcela; i++) {
      document.getElementById('resultado').innerText += `\n ${i}º Parcela  R$ ${valor_venda + result}`
    }
  }
}
