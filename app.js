import express from 'express';
import router from './routes/membrosRoutes.js';
import allowCors from './serveless.js';

const app = express();
const port = process.env.PORT || 3000;

// Adiciona o middleware CORS globalmente
app.use(allowCors);

// Middleware para parsear JSON do corpo da requisição
app.use(express.json());

// Roteamento dos membros
app.use('/membros', router);

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
