import 'dotenv/config';
import express from 'express';
import router from './routes/membrosRoutes.js';

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000 como padrão

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir todos os domínios
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Métodos HTTP permitidos
    res.setHeader('Access-Control-Allow-Headers', 
        'Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Origin'
    );
    next();
});


app.use(express.json());
app.use('/membros', router);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
