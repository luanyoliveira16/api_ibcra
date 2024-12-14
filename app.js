import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/membrosRoutes.js';

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000 como padrão

app.use(cors({
    header("Access-Control-Allow-Origin: *"),
    header("Access-Control-Allow-Headers: content-type, x-teste"),
    header("Access-Control-Allow-Methods: GET', 'POST', 'PUT', 'DELETE")
}))

app.use(express.json());
app.use('/membros', router);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
