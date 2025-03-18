const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const accessToken = authHeader && authHeader.split(" ")[1];

  if (!accessToken)
    return res.status(401).json({ success: false, message: "Access denied" });

  console.log("auth middleware is called");

  try {
    const decodedInfo = jwt.verify(accessToken, process.env.JWT_SECRET);

    req.userInfo = decodedInfo;
    next();
  } catch (e) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
};

module.exports = authMiddleware;
