const express = require("express");
const app = express();

const port = 3000;

// define middleware function
const myFirstMiddleware = (req, res, next) => {
  console.log("The first middleware will run on every request");
  next();
};

app.use(myFirstMiddleware);

app.get("/", (req, res) => {
  res.send("Homepage");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
