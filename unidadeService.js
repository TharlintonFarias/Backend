const unidadeModel = require('../models/unidadeModel');

const unidadeService = {
  getAllService: async () => {
    return await unidadeModel.getAllModel();
  },
  getById: async (id) => {
    return await unidadeModel.getById(id);
  },
  create: async (unidade) => {
    return await unidadeModel.create(unidade);
  },
  update: async (id, unidade) => {
    return await unidadeModel.update(id, unidade);
  },
  delete: async (id) => {
    await unidadeModel.delete(id);
  },
};

module.exports = unidadeService;
