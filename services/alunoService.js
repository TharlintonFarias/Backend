const AlunoModel = require('../models/alunoModel');

const AlunoService = {
  getAllService: async () => {
    return await AlunoModel.getAllModel();
  },
  getById: async (id) => {
    return await AlunoModel.getById(id);
  },
  create: async (aluno) => {
    return await AlunoModel.create(aluno);
  },
  update: async (id, aluno) => {
    return await AlunoModel.update(id, aluno);
  },
  delete: async (id) => {
    await AlunoModel.delete(id);
  },
};

module.exports = AlunoService;
