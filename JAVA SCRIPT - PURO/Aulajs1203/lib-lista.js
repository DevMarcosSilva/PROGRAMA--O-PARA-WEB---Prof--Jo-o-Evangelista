let resultados = []; // Vetor para armazenar os resultados

function calcularSoma() {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const soma = num1 + num2;
    resultados.push(soma); // Adiciona o resultado ao vetor
    mostrarResultado(soma);
}

function mostrarResultado(soma) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpa o conteúdo anterior
    resultados.forEach((resultado, index) => {
        resultadoDiv.innerHTML += `Resultado ${index + 1}: ${resultado}<br>`;
    });
}