import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/membrosRoutes.js';

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000 como padrão

const corsOptions = async (req, res, next) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization');

    // Se for uma solicitação OPTIONS (geralmente usada por navegadores)
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }

    next();
};

module.exports = corsOptions;

app.use(cors(corsOptions));

app.use(express.json());
app.use('/membros', router);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
