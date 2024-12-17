import express from 'express';
import cors from 'cors';
import router from './routes/membrosRoutes.js';

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000 como padrão

// Middleware CORS baseado na configuração da Vercel
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permite qualquer origem
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  return await fn(req, res);
};

// Configuração do middleware CORS
app.use(allowCors); // Adiciona o middleware CORS globalmente

app.use(express.json()); // Middleware para body-parser
app.use('/membros', router); // Roteamento

// Handler para endpoints
const handler = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};

app.use(handler); // Adiciona o handler para lidar com os endpoints

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
