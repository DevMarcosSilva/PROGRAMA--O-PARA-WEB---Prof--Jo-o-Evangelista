// Função para somar dois números
function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
}

// Função para mostrar o resultado na página HTML
function mostrarResultado() {
    // Obtém os valores dos números inseridos pelo usuário
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    
    // Verifica se os valores são válidos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        // Calcula a soma dos números usando a função somarNumeros
        const resultado = somarNumeros(numero1, numero2);
        
        // Exibe o resultado na página HTML
        document.getElementById('resultado').innerText = `A soma de ${numero1} e ${numero2} é: ${resultado}`;
    } else {
        // Se os valores não forem válidos, exibe uma mensagem de erro
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos.';
    }
}
/*Mesmo codigo seum utilizar a crase para concatenar

// Função para somar dois números
function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
}

// Função para mostrar o resultado na página HTML
function mostrarResultado() {
    // Obtém os valores dos números inseridos pelo usuário
    var numero1 = parseFloat(document.getElementById('numero1').value);
    var numero2 = parseFloat(document.getElementById('numero2').value);
    
    // Verifica se os valores são válidos
    if (!isNaN(numero1) && !isNaN(numero2)) {
        // Calcula a soma dos números usando a função somarNumeros
        var resultado = somarNumeros(numero1, numero2);
        
        // Exibe o resultado na página HTML
        document.getElementById('resultado').innerText = "A soma de " + numero1 + " e " + numero2 + " é: " + resultado;
    } else {
        // Se os valores não forem válidos, exibe uma mensagem de erro
        document.getElementById('resultado').innerText = 'Por favor, insira números válidos.';
    }
}
*/