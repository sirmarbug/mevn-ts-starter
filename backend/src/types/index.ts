import {Request} from "express";


export interface RequestWithUser extends Request {
  user: User
}

export interface User {
  firstName: string
  lastName: string
  email: string
  password: string
}
