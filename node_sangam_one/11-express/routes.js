const express = require("express");

const app = express();

const port = 3000;

const products = [
  {
    id: 1,
    label: 1,
  },
  {
    id: 2,
    label: 2,
  },
  {
    id: 3,
    label: 3,
  },
];

// root
app.get("/", (req, res) => {
  res.send("Welcome to our homepage");
});

// get all products
app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const id = +req.params.id;

  res.send(products.find((product) => product.id === id));
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
