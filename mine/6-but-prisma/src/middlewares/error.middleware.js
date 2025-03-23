import { handleError } from "../helpers/error.js";

const ErrorMiddleware = (err, req, res, next) => {
  handleError(err, res);
};

export default ErrorMiddleware;
