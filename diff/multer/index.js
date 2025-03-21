const express = require("express");
const app = express();
const multer = require("multer");
const path = require("node:path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1e9) +
      path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage });

app.get("/", (req, res) => {
  res.send("Welcome");
});

app.post("/api/uploads", upload.single("avatar"), (req, res) => {
  res.json(req.file);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening http://localhost:${port}`);
});
