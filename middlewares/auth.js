const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  // Gauti token iš header'ių
  const token = req.header('Authorization');

  // Patikrinti, ar nėra token
  if (!token) {
    return res.status(401).json({ msg: 'Autorizacija atmesta' });
  }

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token nėra validi' });
  }
};
