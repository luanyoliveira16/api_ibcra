import express from 'express';
import router from './routes/membrosRoutes.js';
// import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS, PATCH, DELETE, POST, PUT");

    next();
 })


// Middleware para parsear JSON do corpo da requisição
app.use(express.json());

// Roteamento dos membros
app.use('/membros', router);


app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
