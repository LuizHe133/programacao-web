const express = require('express');
const path = require('path');
const app = express();
const feedbacks = [];
let nextId = 1;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.post('/feedbacks/enviar', (req, res) => {
  const nome = (req.body.nome || '').trim();
  const comentario = (req.body.comentario || '').trim();

  if (!nome || !comentario) {
    return res.status(400).send('Nome e comentário são obrigatórios.');
  }

  feedbacks.push({ id: nextId++, nome, comentario });
  res.redirect('/feedbacks/lista');
});

app.get('/feedbacks/lista', (req, res) => {
  const lista = feedbacks.length
    ? feedbacks.map(f => `
        <li>
          <strong>${f.nome}</strong>: ${f.comentario}
          <form action="/feedbacks/remover" method="post" style="display:inline; margin-left: 10px;">
            <input type="hidden" name="id" value="${f.id}">
            <button type="submit">Remover</button>
          </form>
        </li>`).join('')
    : '<li>Nenhum feedback enviado.</li>';

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-br">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lista de Feedbacks</title>
      </head>
      <body>
        <h1>Lista de Feedbacks</h1>
        <a href="/">Voltar</a>
        <ul>${lista}</ul>
      </body>
    </html>`);
});

app.post('/feedbacks/remover', (req, res) => {
  const idRemover = Number(req.body.id);
  const idx = feedbacks.findIndex(f => f.id === idRemover);
  if (idx !== -1) feedbacks.splice(idx, 1);
  res.redirect('/feedbacks/lista');
});

app.listen(3000, () => console.log('Servidor rodando em http://localhost:3000'));
