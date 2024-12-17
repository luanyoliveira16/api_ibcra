import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/membrosRoutes.js';

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000 como padrão

// Middleware de CORS
app.use(cors({
  origin: '*', // Permite qualquer origem
  methods: ['GET', 'OPTIONS', 'PATCH', 'DELETE', 'POST', 'PUT'], // Métodos HTTP permitidos
  allowedHeaders: ['X-CSRF-Token', 'X-Requested-With', 'Accept', 'Accept-Version', 'Content-Length', 'Content-MD5', 'Content-Type', 'Date', 'X-Api-Version'], // Cabeçalhos permitidos
  credentials: true // Permite cookies cruzados
}));

app.use(express.json()); // Middleware para body-parser
app.use('/membros', router); // Roteamento

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
