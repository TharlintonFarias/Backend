const express = require('express');
const cors = require('cors');
const alunoRoutes = require('./routes/alunoRoutes');

const unidadeRoutes = require('./routes/unidadeRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors())
app.use('/alunos', alunoRoutes);

app.use('/unidade', unidadeRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

