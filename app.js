import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/membrosRoutes.js';

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000 como padrão

// Configuração do middleware CORS usando a biblioteca 'cors'
app.use(cors({
  origin: '*', // Permite qualquer origem
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Inclui o método DELETE
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'], // Cabeçalhos permitidos
  credentials: true // Permite cookies cruzados
}));

app.use(express.json()); // Middleware para body-parser
app.use('/membros', router); // Roteamento

app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
