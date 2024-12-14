import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/membrosRoutes.js';

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000 como padrão

const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:5174',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Credentials': true,
    'Headers': 'Content-Type, Authorization'
};


app.use(cors(headers));

app.use(express.json());
app.use('/membros', router);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
