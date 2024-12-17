import express from 'express';
import cors from 'cors';
import router from './routes/membrosRoutes.js';
import allowCors from './servelessVercel.js';

const app = express();
const port = process.env.PORT || 3000;

// Adiciona o middleware CORS globalmente
app.use(allowCors);

// Middleware para parsear JSON do corpo da requisição
app.use(express.json());

// Roteamento dos membros
app.use('/membros', router);

// Handler para todos os endpoints
const handler = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};
app.use(handler); // Adiciona o handler para lidar com todos os endpoints

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
