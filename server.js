const express = require('express');
const path = require('path');
const api = require ("./assets/js/index")

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", api)