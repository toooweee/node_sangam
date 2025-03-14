const requestsLogger = (req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}, Time: ${Date.now()}`);
  next();
};

module.exports = requestsLogger;
