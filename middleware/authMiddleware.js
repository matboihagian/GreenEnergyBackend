const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Obtém o token do cabeçalho Authorization
  
  if (!token) {
    return res.status(403).json({ error: 'Acesso negado: Token não fornecido' });
  }

  try {
    const decoded = jwt.verify(token, 'your-secret-key'); // Substitua 'your-secret-key' pela sua chave secreta
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido ou expirado' });
  }
};
