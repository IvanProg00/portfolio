const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");

app.use(
	compression({
		level: 8,
		strategy: 0,
	})
);
app.use(helmet());
app.use(express.static("public"));

app.all("*", (_, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is working on ${PORT}`);
});
