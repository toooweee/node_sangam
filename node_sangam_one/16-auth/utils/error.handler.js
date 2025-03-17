function requestHandler(err, req, res, next) {
  console.log(err.stack);
  res.status(500).json({ message: "Internal server error" });
}

module.exports = requestHandler;
