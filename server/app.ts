import * as express from 'express';
import { Express, Request, Response } from 'express';
import * as path from 'path';
import * as compression from 'compression';
import * as cors from 'cors';

const app: Express = express();
const PORT: number = parseInt(process.env.PORT ?? '') || 8080;

const publicDir: string = path.join(__dirname, '..', 'public');
const pagesDir: string = path.join(__dirname, '..', 'pages');

app.use(compression());
app.use(cors());
app.use(express.static(publicDir));

app.get('/', (_: Request, res: Response) => {
	res.sendFile(path.join(pagesDir, 'index.html'));
});
app.get('*', (_: Request, res: Response) => {
	res.redirect('/');
});

app.listen(PORT, () => {
	console.log(`Server is working on ${PORT}`);
});
