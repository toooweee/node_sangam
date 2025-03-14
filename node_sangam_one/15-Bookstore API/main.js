require("dotenv").config();

const requestsLogger = require("./middlewares/reqLogger.middleware.js");
const express = require("express");

const connectToDB = require("./database/db.js");
connectToDB();

const bookRoutes = require("./routes/book.routes.js");

const app = express();

// middlewares
app.use(express.json());
app.use(requestsLogger);

// routes
app.use("/api/books", bookRoutes);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
