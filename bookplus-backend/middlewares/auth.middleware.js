const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authorizationHeader = req.headers["authorization"];

  if (!authorizationHeader) {
    res.status(401).json({ message: 'Authorization header with token is required for authentication' });
    return;
  }

  const token = authorizationHeader.replace("Bearer ", "");

  if (!token) {
    res.status(401).json({ message: 'Token not provided in the Authorization header' });
    return;
  }

  try {
    const decoded = jwt.verify(token, "TAG_JWT_SECRET_KEY");
    req.user = decoded;
  } catch (err) {
    res.status(401).json({ message: 'Invalid authorization token' });
    return;
  }

  return next();
};

module.exports = verifyToken;
