const allowCors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Permite qualquer origem
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  res.setHeader('Access-Control-Allow-Credentials', true); // Permite cookies cruzados

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Responde de imediato para preflight requests
  }

  next(); // Continua para o próximo middleware ou rota
};

const handler = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};

export { allowCors, handler };
