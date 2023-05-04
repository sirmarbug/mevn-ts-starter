import {Request} from "express";
import {Document} from "mongoose";
import {Socket} from "socket.io";


export interface RequestWithUser extends Request {
  user: TokenData
}

export interface SocketWithUser extends Socket {
  user: TokenData
}

export interface User {
  firstName: string
  lastName: string
  email: string
  password: string
}

export interface TokenData {
  userId: string
  email: string
  firstName: string
  lastName: string
}

export interface Author {
  firstName: string
  lastName: string
}

export interface PostDocument extends Document {
  author: Author
  text: string
  date: Date
}

export interface ActiveUser {
  socketId: string
  user: TokenData
}

export class ExtendError extends Error {
  constructor(
    public code: string,
    public status: number,
    public message: string
  ) {
    super(message)
    this.status = status
    this.code = code

    Object.setPrototypeOf(this, ExtendError.prototype);
  }
}

export interface ErrorResponse {
  code: string
  message: string
}

export interface ErrorResponseDTO {
  status: number
  error: ErrorResponse
}
