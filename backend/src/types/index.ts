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
