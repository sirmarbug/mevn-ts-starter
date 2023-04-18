import {Request} from "express";
import {Document} from "mongoose";


export interface RequestWithUser extends Request {
  user: User
}

export interface User {
  firstName: string
  lastName: string
  email: string
  password: string
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
