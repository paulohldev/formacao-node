const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Testando App');
  res.end();
});

app.get('/retorno', (req, res) => {
  res.send('NodeJS é uma delicia');
  res.end();
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server iniciado na porta ${PORT}`));
