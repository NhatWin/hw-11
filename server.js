const noteData = require("./db/db.json")

const express = require("express");
// const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.get("/test", (req, res) => res.json(noteData))

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);