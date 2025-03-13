const express = require("express");

const app = express();

// application level settings
app.set("view engine", "ejs");

// routing
app.get("/", (req, res) => {
  res.send("Homepage");
});

app.post("/api/data", (req, res) => {
  res.json({
    message: "Data received",
    data: req.body,
  });
});

app.use((req, res, next) => {
  res.status(500).send("Something went wrong");
});

app.listen(4000, () => {
  console.log(`Server is running at http://localhost:4000`);
});
