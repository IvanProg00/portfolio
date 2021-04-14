// import express, { Express} from "express";
import * as express from "express";
import { Express, Request, Response } from "express";
import * as path from "path";
import * as compression from "compression";
import * as cors from "cors";

const app: Express = express();
const PORT: number = parseInt(process.env.PORT ?? "") || 8080;

const publicDir: string = path.join(__dirname, "..", "public");

app.use(compression());
app.use(cors());
app.use(express.static(publicDir));

app.get("/", (_, res) => {
	res.sendFile(path.join(publicDir, "index.html"));
});
app.all("*", (_:Request, res: Response) => {
  res.redirect('/');
})

app.listen(PORT, () => {
	console.log(`Server is working on ${PORT}`);
});
