import 'dotenv/config';
import express from 'express';
import router from './routes/membrosRoutes.js';

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000 como padrão

app.use(cors({
    origin: '*', // Permite todas as origens
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // Permite todos os métodos necessários
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Methods'], // Permite os cabeçalhos necessários
    credentials: true, // Se necessário, permite envio de cookies
}));


app.use(express.json());
app.use('/membros', router);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
