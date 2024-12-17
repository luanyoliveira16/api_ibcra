// Middleware para gerenciar CORS
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permitir todas as origens
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  return await fn(req, res);
}

// Manipulador de rota
const handler = async (req, res) => {
  // Aqui você deve retornar os dados que deseja que sejam manipulados e enviados como resposta
  const data = {
    message: "API rodando corretamente!",
    timestamp: new Date().toISOString()
  };
  
  res.json(data);
}

export default allowCors(handler);

