const express = require('express');
const AlunoController = require('../controllers/alunoControllers');

const router = express.Router();

router.get('/', AlunoController.getAll);
router.get('/:id', AlunoController.getById);
router.post('/', AlunoController.create);
router.put('/:id', AlunoController.update);
router.delete('/:id', AlunoController.delete);

module.exports = router;
