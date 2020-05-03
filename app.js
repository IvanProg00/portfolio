const express = require("express");
const app = express();
const path = require("path");
const compression = require("compression");
const helmet = require("helmet");
const cluster = require("cluster");

if (cluster.isMaster) {
	let sizeCpus = require("os").cpus().length;
	for (let i = 0; i < sizeCpus; i++) {
		cluster.fork();
	}
} else {
	app.use(
		compression({
			level: 9,
			strategy: 0
		})
	);
	app.use(helmet());
	app.use(express.static("public"));

	app.all("*", (_, res) => {
		res.sendFile(path.join(__dirname, "public", "index.html"));
	});

	const PORT = process.env.PORT || 8080;
	app.listen(PORT, () => {
		console.log(`server working on ${PORT}`);
	});
}
