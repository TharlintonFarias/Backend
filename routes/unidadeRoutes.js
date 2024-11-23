const express = require('express');
const unidadeController = require('../controllers/unidadeControllers');

const router = express.Router();

router.get('/', unidadeController.getAll);
router.get('/:id', unidadeController.getById);
router.post('/', unidadeController.create);
router.put('/:id', unidadeController.update);
router.delete('/:id', unidadeController.delete);

module.exports = router;
