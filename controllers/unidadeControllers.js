const unidadeService = require('../services/unidadeService');

const unidadeController = {
  getAll: async (req, res) => {
    try {
      const unidade = await unidadeService.getAllService();
      res.status(200).json(unidade);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar unidade' });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const unidade = await unidadeService.getById(id);
      if (!unidade) return res.status(404).json({ error: 'unidade não encontrado' });
      res.json(unidade);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar unidade' });
    }
  },
  create: async (req, res) => {
    try {
      const unidade = await unidadeService.create(req.body);
      res.status(201).json(unidade);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar unidade' });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const unidade = await unidadeService.update(id, req.body);
      res.json(unidade);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar unidade' });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      await AlunoService.delete(id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar aluno' });
    }
  },
};

module.exports = unidadeController;
