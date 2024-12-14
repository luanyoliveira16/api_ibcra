import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/membrosRoutes.js';

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000 como padrão


app.use(cors({
  origin: 'http://localhost:5173', // Substitua pelo domínio da sua aplicação
  credentials: true,
}));

app.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*'); // Permitir todas as origens
   res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
   next();
});

app.post('https://api-ibcra.vercel.app/membros', async (req, res) => {
    try {
        const response = await fetch('https://api-ibcra.vercel.app/membros', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        const data = await response.json();
        res.status(response.status).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.use(express.json());
app.use('/membros', router);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
