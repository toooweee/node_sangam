const express = require("express");
const app = express();

const port = 3000;

const requestTimeStampLogger = (req, res, next) => {
  const timeStamp = new Date().toISOString();

  console.log(`${timeStamp} from ${req.method} to ${req.url}`);
  next();
};

app.use(requestTimeStampLogger);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/contacts", (req, res) => {
  res.send("Contacts");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
