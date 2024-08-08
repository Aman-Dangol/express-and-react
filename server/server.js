const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json("hello");
});
app.get("/home", (req, res) => {
  res.send("kore wa home desu");
});

app.listen(8000);
