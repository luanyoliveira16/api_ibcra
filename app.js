import express from 'express';
import router from './routes/membrosRoutes.js';
import cors from 'cors';

const corsOptions = {
    Access-Control-Allow-Origin: '*', // Permitir todas as origens
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'], // Permitir DELETE
    allowedHeaders: ['Content-Type', 'Authorization', '*'],
    preflightContinue: false,
    optionsSuccessStatus: 204
};

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors(corsOptions));

// Middleware para parsear JSON do corpo da requisição
app.use(express.json());

// Roteamento dos membros
const router = require('./routes/membrosRoutes.js');
app.use('/api/membros', router);

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`);
});



// import express from 'express';
// import router from './routes/membrosRoutes.js';
// // import cors from 'cors';

// const app = express();
// const port = process.env.PORT || 3000;

// // app.use(cors())

// // Middleware para permitir CORS
// app.use((req, res, next) => {
//     if (req.method == 'GET' || req.method == 'DELETE' || req
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, OPTIONS, PATCH, DELETE, POST, PUT");

//     // Se for uma requisição do tipo OPTIONS, responde com status 200 imediatamente
//     if (req.method === 'OPTIONS') {
//          res.header("Access-Control-Allow-Origin", "*");
//          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//          res.header("Access-Control-Allow-Methods", "GET, OPTIONS, PATCH, DELETE, POST, PUT");
//          res.sendStatus(200);
//     }

//     next();
// });

// // Middleware para parsear JSON do corpo da requisição
// app.use(express.json());

// // Roteamento dos membros
// app.use('/membros', router);

// app.listen(port, () => {
//   console.log(`API rodando na porta ${port}`);
// });
