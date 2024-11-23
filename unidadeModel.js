const db = require('../config/database.js'); // pegando a conexão com o bando de dados no arquivo database

const unidadeModel = {
  getAllModel: async () => {
    const [rows] = await db.query('SELECT * FROM unidade');
    return rows
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM unidade WHERE id = ?', [id]);
    return rows[0];
  },
  create: async (unidade) => {
    const { nome, cidade, cep } = unidade;
    console.log(unidade)
    const [result] = await db.query('INSERT INTO unidade (nome, cidade, cep) VALUES (?, ?, ?)', [nome, cidade, cep]);
    return { id: result.insertId, nome, cidade, cep };
  },
  update: async (id, unidade) => {
    const { nome, cidade, cep } = unidade;
    await db.query('UPDATE unidade SET nome = ?, cidade = ? cep = ? WHERE id = ?', [nome, cidade, cep, id]);
    return { id, nome, cidade, cep };
  },
  delete: async (id) => {
    await db.query('DELETE FROM unidade WHERE id = ?', [id]);
  },
};

module.exports = unidadeModel;
