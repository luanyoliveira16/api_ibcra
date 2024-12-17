import express from 'express';
import cors from 'cors';
import router from './routes/membrosRoutes.js';
import allowCors from './servelessVercel.js';

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000 como padrão


app.use(allowCors); // Adiciona o middleware CORS globalmente

app.use(express.json()); // Middleware para body-parser
app.use('/membros', router); // Roteamento


app.use(handler); // Adiciona o handler para lidar com os endpoints

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
