const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const accessToken = authHeader && authHeader.split(" ")[1];

  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    req.userInfo = jwt.verify(accessToken, process.env.JWT_SECRET);
    next();
  } catch (e) {
    console.error(e.stack);
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = authMiddleware;
