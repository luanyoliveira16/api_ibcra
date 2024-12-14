import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/membrosRoutes.js';

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000 como padrão

const corsOptions = {
    origin: 'http://localhost:5174', // Permite requisições de 'http://localhost:5174'
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite os métodos HTTP
    allowedHeaders: ['Content-Type', 'x-teste', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Headers'], // Headers permitidos
};

app.use(cors(corsOptions));

app.use(express.json());
app.use('/membros', router);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
