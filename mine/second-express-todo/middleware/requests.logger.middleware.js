function requestsLogger(req, res, next) {
  console.log(`Request: ${req.method} ${req.url} ${new Date().toISOString()}`);
  next();
}

module.exports = requestsLogger;
