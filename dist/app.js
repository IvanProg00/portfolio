"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const compression = require("compression");
const cors = require("cors");
const app = express();
const PORT = parseInt(process.env.PORT ?? "") || 8080;
const publicDir = path.join(__dirname, "..", "public");
app.use(compression());
app.use(cors());
app.use(express.static(publicDir));
app.get("/", (_, res) => {
    res.sendFile(path.join(publicDir, "index.html"));
});
app.all("*", (_, res) => {
    res.redirect('/');
});
app.listen(PORT, () => {
    console.log(`Server is working on ${PORT}`);
});
