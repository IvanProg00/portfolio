const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");

app.use(express.static("public"));
app.use(compression());

app.all("*", (_, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`server working on ${PORT}`);
});
