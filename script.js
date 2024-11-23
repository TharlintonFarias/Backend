const apiUrl = 'http://localhost:3000/alunos';

// Referências aos elementos do DOM
const alunoForm = document.getElementById('aluno-form');
const alunoList = document.getElementById('aluno-list');
const alunoIdInput = document.getElementById('aluno-id');
const nomeInput = document.getElementById('nome');
const idadeInput = document.getElementById('idade');
const emailInput = document.getElementById('email');

// Função para buscar alunos
async function fetchAlunos() {
  const response = await fetch(apiUrl);
  const alunos = await response.json();
  renderAlunos(alunos);
}

// Função para renderizar alunos na tabela
function renderAlunos(alunos) {
  alunoList.innerHTML = '';
  alunos.forEach((aluno) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${aluno.nome}</td>
      <td>${aluno.idade}</td>
      <td>${aluno.email}</td>
      <td class="actions">
        <button onclick="editAluno(${aluno.id})">Editar</button>
        <button class="delete" onclick="deleteAluno(${aluno.id})">Excluir</button>
      </td>
    `;
    alunoList.appendChild(row);
  });
}

// Função para salvar ou atualizar aluno
alunoForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const id = alunoIdInput.value;
  const aluno = {
    nome: nomeInput.value,
    idade: idadeInput.value,
    email: emailInput.value,
  };

  if (id) {
    // Atualizar aluno
    await fetch(`${apiUrl}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(aluno),
    });
  } else {
    // Criar novo aluno
    await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(aluno),
    });
  }

  alunoForm.reset();
  fetchAlunos();
});

// Função para carregar dados de um aluno para edição
async function editAluno(id) {
  const response = await fetch(`${apiUrl}/${id}`);
  const aluno = await response.json();

  alunoIdInput.value = aluno.id;
  nomeInput.value = aluno.nome;
  idadeInput.value = aluno.idade;
  emailInput.value = aluno.email;
}

// Função para excluir aluno
async function deleteAluno(id) {
  await fetch(`${apiUrl}/${id}`, { method: 'DELETE' });
  fetchAlunos();
}

// Carregar a lista de alunos ao iniciar
fetchAlunos();
