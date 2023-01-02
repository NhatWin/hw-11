const noteData = require("./db/db.json")
const { v4: uuidv4 } = require('uuid');
const express = require("express");
const path = require("path");
const { writeFile, writeFileSync } = require("fs");
const { stringify } = require("querystring");

const app = express();
const PORT = 3001;

app.use(express.static('public'));

app.use(express.json())

app.get("/api/notes", (_,res) => res.json(noteData));

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  newNote.id = uuidv4();
  noteData.push(newNote);
  writeFileSync("./db/db.json", JSON.stringify(noteData));
  res.json(noteData);
})

// Delete


// Display
app.get("/notes", (_, res) => res.sendFile(path.join(__dirname, "./public/notes.html")))

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);