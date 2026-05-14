# Feedback de Alunos - Curso Online

Aplicação simples desenvolvida em Node.js com Express.js para coleta de feedbacks de alunos. Os dados são mantidos apenas em memória durante a execução do servidor.

## Rotas implementadas

- `GET /` - Página inicial com formulário de envio de feedback
- `POST /feedbacks/enviar` - Recebe o feedback e salva em memória
- `GET /feedbacks/lista` - Exibe todos os feedbacks enviados
- `POST /feedbacks/remover` - Remove um feedback da lista

## Executar

```bash
cd Atividade-Node.js-Express
npm install
npm start
```

Acesse: `http://localhost:3000`

## Observações

- Os feedbacks são armazenados apenas em memória.
- Ao reiniciar o servidor, todos os dados são perdidos.
