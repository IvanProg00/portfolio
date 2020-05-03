const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");
const zlib = require("zlib");
const helmet = require("helmet");

app.use(
	compression({
		level: zlib.Z_BEST_COMPRESSION,
		strategy: zlib.Z_DEFAULT_STRATEGY,
	})
);
app.use(helmet());
app.use(express.static("public"));

app.all("*", (_, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
	res.flush();
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`server working on ${PORT}`);
});
