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
    switch (req.method) {
      case 'GET':
        if (req.url === '/membros') {
          // Aqui você deve implementar a lógica para buscar os dados dos membros
          const response = await fetch('https://api-ibcra.vercel.app/membros');
          if (!response.ok) {
            throw new Error('Erro ao buscar os membros');
          }
          const data = await response.json();
          res.status(200).json(data);
        } else {
          res.status(404).json({ error: 'Rota não encontrada' });
        }
        break;

      case 'POST':
        // Exemplo de resposta para POST
        const body = req.body;
        const data = {
          message: 'POST request successful',
          receivedData: body
        };
        res.status(200).json(data);
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Método ${req.method} não permitido`);
        break;
    }
  } catch (error) {
    // Tratamento de erro genérico
    res.status(500).json({ error: 'Ocorreu um erro interno' });
  }
};

export default allowCors(handler);
