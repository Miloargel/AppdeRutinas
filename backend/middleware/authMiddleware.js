const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ msg: 'No hay token, acceso denegado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token inválido' });
  }
};

module.exports = protect;
