import {NextFunction, Request, Response} from "express";
import {ErrorResponseDTO, ExtendError} from "../types";

const createErrorObject = (err: ExtendError): ErrorResponseDTO => {
  return {
    status: err.status,
    error: {
      message: err.message,
      code: err.code
    }
  }
}

export const catchNotFound = (req: Request, res: Response, next: NextFunction) => {
  const err = new ExtendError('notFound', 404, 'Not found api path')
  next(err)
}

const catchError = (err: ExtendError, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status).send(createErrorObject(err))
}

export default catchError
