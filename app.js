const express = require('express');
const cors = require('cors');
const router = require('./routes/membrosRoutes.js');

const app = express();
const port = process.env.PORT || 3000;

// Configurações CORS
const corsOptions = {
    origin: '*',
    methods: ['GET', 'OPTIONS', 'PATCH', 'DELETE', 'POST', 'PUT'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
};

app.use(cors(corsOptions));

// Tratamento para requisições pré-flights (OPTIONS)
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Methods", "GET, OPTIONS, PATCH, DELETE, POST, PUT");
        res.sendStatus(200);
    } else {
        next();
    }
});

// Middleware para parsear JSON do corpo da requisição
app.use(express.json());

// Roteamento dos membros
app.use('/membros', router);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});
