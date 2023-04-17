import {Request, Response} from "express";

export const get = (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
}
