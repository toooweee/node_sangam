const errorHandler = require("../utils/error.handler");

const ErrorMiddleware = (err, req, res, next) => {
  errorHandler(err, res);
};

module.exports = ErrorMiddleware;
