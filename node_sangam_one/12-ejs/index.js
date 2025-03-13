const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

// set the view engine as ejs
app.set("view engine", "ejs");

// set directory for the views
app.set("views", path.join(__dirname, "views"));

const products = [
  {
    id: 1,
    title: "Product 1",
  },
  {
    id: 2,
    title: "Product 2",
  },
  {
    id: 3,
    title: "Product 3",
  },
];

app.get("/", (req, res) => {
  res.render("home", { title: "Homepage", products: products });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
