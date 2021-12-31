const app = require("express")();
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;

const initialPath = path.join(__dirname, "public");

app.use(express.static(initialPath));

app.get("/movie", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`Listening on https://localhost:${PORT}`));
