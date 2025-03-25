export class ErrorHandler extends Error {
  constructor(statusCode, messsage) {
    super();
    this.statusCode = statusCode;
    this.messsage = messsage;
  }
}

export const handleError = (err, res) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    status: "error",
    message: message,
    statusCode: statusCode,
  });
};
