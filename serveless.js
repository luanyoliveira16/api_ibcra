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

  // Passa a requisição para o manipulador
  return fn(req, res);
}

// Manipulador de rota
const handler = async (req, res) => {
  try {
    const data = await fetchMembros();
    res.json(data); // Aqui é onde o conteúdo da requisição é retornado
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar os dados." });
  }
};

export default allowCors(handler);
