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
};

// Função para lidar com a requisição
const handler = async (req, res) => {
  try {
    if (req.method === 'GET' && req.url === '/membros') {
      // Aqui você deveria implementar a lógica para buscar os dados dos membros
      const data = await fetch('https://api-ibcra.vercel.app/membros')
        .then(response => response.json())
        .catch(err => {
          throw new Error('Erro ao buscar os membros');
        });

      res.status(200).json(data);
    } else if (req.method === 'POST') {
      // Exemplo de resposta para POST
      const body = req.body;
      const data = {
        message: 'POST request successful',
        receivedData: body
      };
      res.status(200).json(data);
    } else {
      // Método não suportado
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Método ${req.method} não permitido`);
    }
  } catch (error) {
    // Tratamento de erro genérico
    res.status(500).json({ error: 'Ocorreu um erro interno' });
  }
};

export default allowCors(handler);
