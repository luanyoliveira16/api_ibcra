import express from 'express';
import router from './routes/membrosRoutes.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// app.use(cors())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS, PATCH, DELETE, POST, PUT");

    // Se for uma requisição do tipo OPTIONS, responde com status 200 imediatamente
    if (req.method === "OPTIONS") {
    res.header('Access-Control-Allow-Origin', req.headers.origin);
  } else {
    res.header('Access-Control-Allow-Origin', '*');
  }
    }

    next();
});

//app.use(cors({origin:true,credentials: true}))

// Middleware para parsear JSON do corpo da requisição
app.use(express.json());

// Roteamento dos membros
app.use('/membros', router);


app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});
