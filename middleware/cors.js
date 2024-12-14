const allowCors = fn => async (req, res) => {
          res.setHeader('Access-Control-Allow-Credentials', true);
          res.setHeader('Access-Control-Allow-Origin', '*'); // Pode ser ajustado para 'http://seu-domínio.com' ou similar
          res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
          res.setHeader(
            'Access-Control-Allow-Headers',
            'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
          );
          if (req.method === 'OPTIONS') {
            res.status(200).end();
            return;
          }
          return await fn(req, res);
        };
        
export default allowCors;
        