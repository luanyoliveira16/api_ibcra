import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/membrosRoutes.js';

const app = express();
const port = process.env.PORT || 3000; // Usa a porta do ambiente ou 3000 como padrão


app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Header', 'Content-Type',
        'Origin, X-Requrested-width, Content-Type, Accept, Authorization'
    );

    if (req.method === 'OPTIONS') {
        res.hearder('Acess-Control-Allow-Methods', 'PUT, POST, GET, DELETE')
        return res.status(200).send({})
    }

    next();

});

app.use(express.json());
app.use('/membros', router);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
