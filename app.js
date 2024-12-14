import 'dotenv/config';
import express from 'express';
import allowCors from './middleware/cors.js';
import router from './routes/membrosRoutes.js';

const app = express();
const port = process.env.PORT || 4000 // Usa a porta do ambiente ou 3000 como padrão

app.use(allowCors);
app.use(express.json());
app.use('/membros', router);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
