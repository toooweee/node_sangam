const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send(`your cookies: 
  ${req.headers?.cookie}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
