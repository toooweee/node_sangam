const pointTimeMiddleware = (req, res, next) => {
  const time = new Date().toISOString();
  console.log(`Request: ${req.url}, Time: ${time}`);
  next();
};

module.exports = pointTimeMiddleware;
