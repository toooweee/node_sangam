const adminMiddleware = (req, res, next) => {
  const userRole = req.userInfo.role;

  if (userRole !== "admin") {
    return res.status(403).json({ message: "Access denied" });
  }

  next();
};

module.exports = adminMiddleware;
