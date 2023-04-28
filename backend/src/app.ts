import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'
import connect from "./configs/db";
import routes from './routers'
import catchError, {catchNotFound} from "./middlewares/catchError";
import {ExtendError} from "./types";

dotenv.config();
connect();

const app: Express = express();

app.use(express.json())
app.use(cors())

app.use('/api', routes)

// TODO: Not Found implement
app.use((req, res, next) => {
  const err = new ExtendError('one', 404, 'Not Found')
  console.log('err')
  next(err)
})

app.use(catchError)

export default app
