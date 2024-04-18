function somar(numero1,numero2){
    return numero1+numero2;
}

function mostrarResultado(){
    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)
    document.getElementById('resultado').innerText = `a soma de ${numero1} e ${numero2} e: ${somar}`
}
    

    
