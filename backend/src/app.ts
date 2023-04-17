import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const app: Express = express();

app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

export default app
