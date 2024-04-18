const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let alunos = [];

function calcularMediaTurma() {
    if (alunos.length === 0) return 0;
    
    const somaNotas = alunos.reduce((acc, aluno) => acc + aluno.media, 0);
    return somaNotas / alunos.length;
}

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/adicionar_aluno', (req, res) => {
    const nome = req.query.nome;
    const nota1 = parseFloat(req.query.nota1);
    const nota2 = parseFloat(req.query.nota2);
    const media = (nota1 + nota2) / 2;

    alunos.push({ nome, nota1, nota2, media });

    const maiorMedia = Math.max(...alunos.map(aluno => aluno.media));
    const mediaTurma = calcularMediaTurma();
    
    console.log(maiorMedia, mediaTurma);

    // Renderizando o arquivo 'index.ejs' e passando os dados dinâmicos para o modelo
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/informacoes_turma', (req, res) => {
    const maiorMedia = Math.max(...alunos.map(aluno => aluno.media));
    const mediaTurma = calcularMediaTurma();
    res.send(`Maior Média da Turma: ${maiorMedia}, Média da Turma: ${mediaTurma}`);
  });
  
  app.get('/lista_alunos', (req, res) => {
    const listaAlunosHTML = alunos.map(aluno => `<li>${aluno.nome}: Nota 1: ${aluno.nota1}, Nota 2: ${aluno.nota2}, Média: ${aluno.media}</li>`).join('');
    res.send(`<ul>${listaAlunosHTML}</ul>`);
  });
  
// Iniciando o servidor na porta 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
