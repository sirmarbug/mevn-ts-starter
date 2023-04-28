import {NextFunction, Request, Response} from "express";
import {ExtendError} from "../types";

export const catchNotFound = (req: Request, res: Response, next: NextFunction) => {
  const err = new ExtendError('one', 404, '')
  next(err)
}

const catchError = (err: ExtendError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status).send(err.message)
}

export default catchError
