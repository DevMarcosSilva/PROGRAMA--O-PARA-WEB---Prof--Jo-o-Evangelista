const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

let somaIdade = 0;
let contador = 0;
let maiorIdade = 0;

app.get('/somarIdade', (req, res) => {
    const idade = parseInt(req.query.idade);

    if (!isNaN(idade) && idade > 0) {
        contador++;
        somaIdade += idade;

        if (idade > maiorIdade) {
            maiorIdade = idade;
        }
        
        res.send(`Soma: ${somaIdade}, Idades cadastradas: ${contador}, Maior idade: ${maiorIdade}`);
    } else {
        res.status(400).send("Por favor, forneça uma idade válida.");
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));