const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token = req.header('Authorization');

  if (!token) return res.status(401).json({ msg: 'No hay token, acceso denegado' });
  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error("Token inválido", error.message);
    res.status(401).json({ msg: 'Token inválido' });
  }
};

module.exports = protect;
