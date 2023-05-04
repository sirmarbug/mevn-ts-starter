import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connect from "./configs/db";
import routes from './routers'
import catchError, {catchNotFound} from "./middlewares/catchError";

dotenv.config();
connect();

const app: Express = express();

app.use(express.json())
app.use(cors())

app.use('/api', routes)

app.use(catchNotFound)
app.use(catchError)

export default app
