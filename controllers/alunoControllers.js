const AlunoService = require('../services/alunoService');

const AlunoController = {
  getAll: async (req, res) => {
    try {
      const alunos = await AlunoService.getAllService();
      res.status(200).json(alunos);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar alunos' });
    }
  },
  getById: async (req, res) => {
    try {
      const { id } = req.params;
      const aluno = await AlunoService.getById(id);
      if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
      res.json(aluno);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar aluno' });
    }
  },
  create: async (req, res) => {
    try {
      const aluno = await AlunoService.create(req.body);
      res.status(201).json(aluno);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar aluno' });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const aluno = await AlunoService.update(id, req.body);
      res.json(aluno);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar aluno' });
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

module.exports = AlunoController;
