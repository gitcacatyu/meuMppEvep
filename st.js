const input = document.querySelector('input');
const lista = document.querySelector('ul');

let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

// Renderiza as tarefas da memória
function renderizarTarefas() {
  lista.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    li.textContent = tarefa.texto;

    if (tarefa.concluida) {
      li.style.textDecoration = 'line-through';
      li.style.opacity = '0.6';
    }

    // Botão Riscar
    const riscarBtn = document.createElement('button');
    riscarBtn.textContent = '✔️';
    riscarBtn.title = 'Marcar como concluída';
    riscarBtn.style.marginLeft = '10px';
    riscarBtn.onclick = () => {
      tarefas[index].concluida = !tarefas[index].concluida;
      salvarEAtualizar();
    };

    // Botão Remover
    const removerBtn = document.createElement('button');
    removerBtn.textContent = '🗑️';
    removerBtn.title = 'Remover tarefa';
    removerBtn.style.marginLeft = '5px';
    removerBtn.onclick = () => {
      tarefas.splice(index, 1);
      salvarEAtualizar();
    };

    li.appendChild(riscarBtn);
    li.appendChild(removerBtn);
    lista.appendChild(li);
  });
}

// Salva no localStorage e atualiza a lista
function salvarEAtualizar() {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
  renderizarTarefas();
}

// Adiciona nova tarefa
function handleKeyUp(e) {
  const valor = input.value.trim();

  if (e.key === 'Enter' && valor !== '') {
    tarefas.push({ texto: valor, concluida: false });
    input.value = '';
    salvarEAtualizar();
  }
}

input.addEventListener('keyup', handleKeyUp);

// Carregar as tarefas ao abrir
renderizarTarefas();
