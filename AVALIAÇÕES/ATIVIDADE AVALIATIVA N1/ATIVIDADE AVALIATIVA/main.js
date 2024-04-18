document.addEventListener('DOMContentLoaded', function() {
    const adicionarTarefaButton = document.getElementById('adicionar-tarefa');
    const visualizarTarefasButton = document.getElementById('visualizar-tarefas');
    const buscarTarefasButton = document.getElementById('buscar-tarefas');
    const adicionarTarefaSection = document.getElementById('adicionar-tarefa-section');
    const visualizarTarefasSection = document.getElementById('visualizar-tarefas-section');
    const chaveLista = document.getElementById('chave-lista');
    const retornoMenuButton = document.getElementById('retorno-menu');
    const categoriaFiltro = document.getElementById('categoria-filtro');
    const prioridadeFiltro = document.getElementById('prioridade-filtro');
    const formulario = document.getElementById('formulario');

    let tarefas = [];

    visualizarTarefasSection.style.display = 'none';

    adicionarTarefaButton.addEventListener('click', function() {
        adicionarTarefaSection.style.display = 'block';
        visualizarTarefasSection.style.display = 'none';
    });

    visualizarTarefasButton.addEventListener('click', function() {
        adicionarTarefaSection.style.display = 'none';
        visualizarTarefasSection.style.display = 'block';
        visualizarTarefas();
    });

    buscarTarefasButton.addEventListener('click', function() {
        const categoriaSelecionada = categoriaFiltro.value;
        const prioridadeSelecionada = prioridadeFiltro.value;
        visualizarTarefasPorFiltro(categoriaSelecionada, prioridadeSelecionada);
    });

    retornoMenuButton.addEventListener('click', function() {
        adicionarTarefaSection.style.display = 'block';
        visualizarTarefasSection.style.display = 'none';
    });

    function visualizarTarefas() {
        chaveLista.innerHTML = '';

        tarefas.forEach(function(tarefa, index) {
            const titulo = document.createElement('div');
            titulo.classList.add('titulo-tarefa');
            titulo.textContent = tarefa.title;
            titulo.addEventListener('click', function() {
                mostrarDetalhesTarefa(index);
            });
            chaveLista.appendChild(titulo);
        });
    }

    function visualizarTarefasPorFiltro(categoriaSelecionada, prioridadeSelecionada) {
        chaveLista.innerHTML = '';

        const tarefasFiltradas = tarefas.filter(function(tarefa) {
            return (!categoriaSelecionada || tarefa.categoria === categoriaSelecionada) &&
                   (!prioridadeSelecionada || tarefa.prioridade === prioridadeSelecionada);
        });

        tarefasFiltradas.forEach(function(tarefa, index) {
            const titulo = document.createElement('div');
            titulo.classList.add('titulo-tarefa');
            titulo.textContent = tarefa.title;
            titulo.addEventListener('click', function() {
                mostrarDetalhesTarefa(index);
            });
            chaveLista.appendChild(titulo);
        });
    }

    function mostrarDetalhesTarefa(index) {
        const tarefa = tarefas[index];
        alert(`Detalhes da Tarefa:
        
        Título: ${tarefa.title}
        Descrição: ${tarefa.descricao}
        Categoria: ${tarefa.categoria}
        Prioridade: ${tarefa.prioridade}
        Data de Vencimento: ${tarefa.dataVcto}`);
    }

    formulario.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('titulo').value;
        const descricao = document.getElementById('descricao').value;
        const categoria = document.getElementById('categoria').value;
        const prioridade = document.getElementById('prioridade').value;
        const dataVcto = document.getElementById('dataVcto').value;

        const chave = {
            title,
            descricao,
            categoria,
            prioridade,
            dataVcto
        };

        tarefas.push(chave);
        formulario.reset();
    });
});
