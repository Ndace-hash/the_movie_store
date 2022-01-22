const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 4000;

const app = express();
const initialPath = path.join(__dirname, "public");

app.use(express.static(initialPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(initialPath, "index.html"));
});

app.get("/detail/:id", (req, res) => {
  let id = req.params.id;
  res.sendFile(path.join(initialPath, "detail.html"));
});

app.listen(PORT, () => console.log(`Listening on https://localhost:${PORT}`));
