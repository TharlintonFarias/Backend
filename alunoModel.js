const db = require('../config/database.js'); // pegando a conexão com o bando de dados no arquivo database

const AlunoModel = {
  getAllModel: async () => {
    const [rows] = await db.query('SELECT * FROM alunos');
    return rows
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM alunos WHERE id = ?', [id]);
    return rows[0];
  },
  create: async (aluno) => {
    const { nome, idade, email } = aluno;
   ;
    const [result] = await db.query('INSERT INTO alunos (nome, idade, email) VALUES (?, ?, ?)', [nome, idade, email]);
    return { id: result.insertId, nome, idade, email};
  },

  update: async (id, aluno) => {
    const { nome, idade, email } = aluno;
    console.log(aluno);
    console.log(id);
    await db.query('UPDATE alunos SET nome = ?, idade = ?, email = ? WHERE id = ?', [nome, idade, email, id]);
    return { id, nome, idade, email };
},

  delete: async (id) => {
    await db.query('DELETE FROM alunos WHERE id = ?', [id]);
  },
};

module.exports = AlunoModel;
