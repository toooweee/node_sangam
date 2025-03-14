const pointTimeMiddleware = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`Request: ${req.method} ${req.url}, Time: ${time}`);
  next();
};

module.exports = pointTimeMiddleware;
